"use client"
import React, { useState, useEffect } from "react";

type Contribution = {
  project: string;
  url: string;
};

type UserStats = {
  username: string;
  banned:boolean;
  user_url: string;
  avatar_url: string;
  score: number;
  contributions: Contribution[];
};

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserStats[]>([]);
  const [activeTab, setActiveTab] = useState<"users" | "contributions">("users");
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserStats[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserStats | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch users from API
  /*
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:8080/admin/users");
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    };
    fetchUsers();
  }, []);*/

// Use static data instead of fetch

var imgurl = "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/684058496613784590/a7a64855-8400-4d0b-9856-0a623694deb4.jpg";
useEffect(() => {
    const staticData: UserStats[] = [
      {
        username: "john_doe",
        banned: false,
        user_url: "https://example.com/john_doe",
        avatar_url: imgurl, score: 120,
        contributions: [
          { project: "Project A", url: "https://example.com/project-a" },
          { project: "Project B", url: "https://example.com/project-b" },
        ],
      },
      {
        username: "jane_smith",
        banned: true,
        user_url: "https://example.com/jane_smith",
        avatar_url: imgurl,
        score: 95,
        contributions: [
          { project: "Project C", url: "https://example.com/project-c" },
        ],
      },
      {
        username: "alice_jones",
        banned: false,
        user_url: "https://example.com/alice_jones",
        avatar_url: imgurl,
        score: 78,
        contributions: [
          { project: "Project D", url: "https://example.com/project-d" },
          { project: "Project E", url: "https://example.com/project-e" },
        ],
      },
    ];

    setUsers(staticData);
    setFilteredUsers(staticData);
  }, []);







  const handleOpenModal = (user: UserStats) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  
  const handleEdit = (field: keyof UserStats, value: any) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, [field]: value });
    }
  };
  
  const handleSaveChanges = () => {
    if (selectedUser) {
      setUsers(
        users.map((user) =>
          user.username === selectedUser.username ? selectedUser : user
        )
      );
    }
    handleCloseModal();
  };
  
  // Filter users based on search
  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.username.toLowerCase().includes(search.toLowerCase()) ||
          user.contributions.some((c) =>
            c.project.toLowerCase().includes(search.toLowerCase())
          )
      )
    );
  }, [search, users]);

  // Delete user
  const handleDelete = async (username: string) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      await fetch(`http://localhost:8080/admin/user/${username}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.username !== username));
    }
  };

  // Ban user
  const handleBan = async (username: string) => {
    if (window.confirm(`Are you sure you want to ban ${username}?`)) {
      await fetch(`http://localhost:8080/admin/user/${username}/ban`, {
        method: "POST",
      });
      alert(`${username} has been banned.`);
    }
  };

  const handleUnassignContribution = (index: number) => {
    const updatedContributions = selectedUser?.contributions.filter((_, i) => i !== index);
    handleEdit("contributions", updatedContributions);
  };
  
  // Render users or contributions based on active tab
  const renderContent = () => {
    if (activeTab === "users") {
      return (
        <div>
          {filteredUsers.map((user) => (
            <div
              key={user.username}
              className={`flex items-center justify-between p-4  rounded-lg mb-4 ${user.banned ? 'text-red line-through bg-red-900' : 'bg-gray-800'}`}
            >
              <div className="flex items-center">
                <img

                  src={user.avatar_url}
                  alt={user.username}
                  className={`w-10 h-10 rounded-full mr-4 ${user.banned ? 'grayscale' : ''}`}
                />
                <div>
                  <h2 className="text-gray-100 font-bold">{user.username}</h2>
                  <h3 className="text-gray-300">Score: {user.score}</h3>
                  <button
        onClick={() => handleOpenModal(user)} // Opens the modal with user data
        className="text-blue-500 text-sm"
      >
        View Profile
      </button>
                  {isModalOpen && selectedUser && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <div className="mb-4">
        <h3 className="text-gray-300">Username: {selectedUser.username}</h3>
        
        <a
          href={selectedUser.user_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm"
        >
          Visit Profile
        </a>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Score</label>
        <input
          type="number"
          value={selectedUser.score}
          onChange={(e) => handleEdit("score", Number(e.target.value))}
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 w-full"
        />
      </div>
      <div className="mb-4">
  <h3 className="text-gray-300 mb-2">Contributions</h3>
  {selectedUser.contributions.map((contribution, index) => (
    <div key={index} className="mb-2 flex items-center justify-between bg-gray-600 p-2 rounded-md">
      <div className="flex flex-col w-full">
        <input
        disabled={true}
          type="text"
          value={contribution.project}
          onChange={(e) =>
            handleEdit(
              "contributions",
              selectedUser.contributions.map((c, i) =>
                i === index
                  ? { ...c, project: e.target.value }
                  : c
              )
            )
          }
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 w-full mb-1"
        />
        <input
          type="text"
          disabled={true}
          value={contribution.url}
          onChange={(e) =>
            handleEdit(
              "contributions",
              selectedUser.contributions.map((c, i) =>
                i === index ? { ...c, url: e.target.value } : c
              )
            )
          }
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 w-full"
        />
      </div>
      <button
        onClick={() => handleUnassignContribution(index)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg ml-4"
      >
        Unassign
      </button>
    </div>
  ))}
</div>

      <div className="flex justify-end">
        <button
          onClick={handleCloseModal}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleSaveChanges}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}
                </div>
              </div>
              {user.banned?<div>
                <button
                  onClick={() => handleBan(user.username)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  UnBan
                </button>
                <button
                  onClick={() => handleDelete(user.username)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>:<div>
                <button
                  onClick={() => handleBan(user.username)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Ban
                </button>
                <button
                  onClick={() => handleDelete(user.username)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>}
              
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "contributions") {
      return (
        <div>
          {filteredUsers.map((user) => (
            <div key={user.username} className="mb-4">
              <h2 className="text-gray-100 font-bold mb-2">{user.username}</h2>
              {user.contributions.map((c, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-800 rounded-lg mb-2"
                >
                  <div>
                    <h3 className="text-gray-300">{c.project}</h3>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm"
                    >
                      View Project
                    </a>
                  </div>
                  <button
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <nav className="flex mb-6">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 mr-4 rounded-lg ${
            activeTab === "users" ? "bg-blue-500" : "bg-gray-700"
          } text-white`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("contributions")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "contributions" ? "bg-blue-500" : "bg-gray-700"
          } text-white`}
        >
          Contributions
        </button>
      </nav>
      {renderContent()}
    </div>
  );
};

export default AdminDashboard;
