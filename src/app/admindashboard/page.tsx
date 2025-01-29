"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Contribution = {
  project: string;
  url: string;
};

type UserStats = {
  user_id: number;
  user_name: string;
  github_username: string;
  github_url: string;
  github_img_url: string;
  pr_count: number;
  score: number;
  banned: boolean;
};

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserStats[]>([]);
  const [activeTab, setActiveTab] = useState<"users" | "contributions">("users");
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserStats[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserStats | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/admin/user", {
          method: "GET", 
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users || []);
          setFilteredUsers(data.users || []);
        } else {
          console.error("Failed to fetch users. Status:", response.status);
        }
      } catch (error) {
        console.error("Error while fetching users:", error);
      }
    };
  
    fetchUsers();
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


  const handleSaveChanges = async (score: number,userid: number, username: string) => {

    if (window.confirm(`Are you sure you want to Update Score ${username} to ${score}?`)) {
      const response = await fetch("http://localhost:8080/admin/user/scorecount", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          Score_count: score,
          user_id: userid
        }),
      });
  
      if (response.ok) { 
        setUsers(users.map((user) => (user.user_id === userid ? { ...user, score: score } : user)));

      } else {

        console.error("Failed to update the score the user");
      }
    }


    if (selectedUser) {
      setUsers(users.map((user) => (user.user_id === selectedUser.user_id ? selectedUser : user)));
    }
    handleCloseModal();
  };


  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.user_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);


  const handleDelete = async (username: string) => {
    alert("u dnot have permission broo :) ask aksh")
    //if (window.confirm(`Are you sure you want to delete ${username}?`)) {
     // await fetch(`http://localhost:8080/admin/user/ban/${username}`, {
     //   method: "POST",
     // });
     // setUsers(users.filter((user) => user.user_name !== username));
   //}
  };


  const handleBan = async (userId: number, username: string) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      const response = await fetch("http://localhost:8080/admin/user/ban", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId, 
        }),
      });
  
      if (response.ok) {
        setUsers(users.map((user) => (user.user_id === userId ? { ...user, banned: true } : user)));

      } else {
        console.error("Failed to ban the user");
      }
    }
  };
  const handleunBan = async (userId: number, username: string) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      const response = await fetch("http://localhost:8080/admin/user/unban", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId, 
        }),
      });
  
      if (response.ok) {
        setUsers(users.map((user) => (user.user_id === userId ? { ...user, banned: false } : user)));

      } else {
        console.error("Failed to ban the user");
      }
    }
  };


  const handleLogout = async () => {
    if (window.confirm(`Are you sure you want to logout?`)) {
      await fetch(`http://localhost:8080/admin/logout`, {
        method: "POST",
        credentials: "include", 
      });
      clearAllCookies();
      router.replace("/admin");
    }
  };


  const clearAllCookies = () => {
    const allCookies = document.cookie.split(";");
    allCookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8080/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: "",
            tags: [""],
          }),
        });

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
       // setLoading(false);
      }
    
    };

    fetchProjects();
  }, []);

  const renderContent = () => {
    if (activeTab === "users") {
      return (
        <div>
          <div className="p-2 text-lg">Total User : {users.length}</div>
          {filteredUsers.map((user) => (
            <div
              key={user.user_id}
              className={`flex items-center justify-between p-4 rounded-[20px] mb-4 ${user.banned ? "bg-red-900 text-red line-through" : "bg-gray-800"}`}
            >
              <div className="flex items-center">
              <img src={`https://placehold.co/100x100/purple/white?text=${user.github_username.charAt(0).toUpperCase()}`} alt={user.github_username} className="w-10 h-10 rounded-xl" />
                  
                <div className="ml-3">
                  <h2 className="text-gray-100  font-bold">{user.user_name}</h2>
                  <h3 className="text-gray-300">Score: {user.score}</h3>
                  <button
                    onClick={() => handleOpenModal(user)}
                    className="text-blue-500 text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>
              {user.banned ? (
                <div>
                  <button
                    onClick={() => handleunBan(user.user_id,user.user_name)}
                    className="bg-red-500 text-white px-4 py-2 rounded-[20px] mr-2"
                  >
                    UnBan
                  </button>
                  <button
                    onClick={() => handleDelete(user.user_name)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-[20px]"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => handleBan(user.user_id,user.user_name)}
                    className="bg-red-500 text-white px-4 py-2 rounded-[20px] mr-2"
                  >
                    Ban
                  </button>
                  <button
                    onClick={() => handleDelete(user.user_name)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-[20px]"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "contributions") {
      return  <div>
      <h2 className="text-xl text-white font-bold text-white mb-4">Contributions</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="p-2 bg-gray-800 rounded-lg mb-2">
              {project}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contributions found.</p>
      )}
    </div>;
    }
  };

  return (
    <div className="max-h-screen-full w-full bg-gray-900 p-8">
<header className="flex flex-wrap items-center justify-between gap-4 mb-6">
  <h1 className="text-3xl font-bold text-gray-100 whitespace-nowrap">
    Admin Dashboard
  </h1>
  <button
    onClick={handleLogout}
    className="min-w-1/2 text-sm font-bold text-white bg-blue-700 rounded-full p-3 hover:bg-blue-800 transition-colors"
  >
    Logout
  </button>
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search..."
    className="px-4  py-2 rounded-full bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {/* Logout Button */}
  
</header>

    <nav className="flex mb-6">
      <button
        onClick={() => setActiveTab("users")}
        className={`px-4 py-2 mr-4 rounded-[20px] ${activeTab === "users" ? "bg-blue-500" : "bg-gray-700"} text-white hover:bg-blue-600 transition-colors`}
      >
        Users
      </button>
      <button
        onClick={() => setActiveTab("contributions")}
        className={`px-4 py-2 rounded-[20px] ${activeTab === "contributions" ? "bg-blue-500" : "bg-gray-700"} text-white hover:bg-blue-600 transition-colors`}
      >
        Contributions
      </button>
    </nav>
    {renderContent()}
    {isModalOpen && selectedUser && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 text-white p-6 rounded-[20px] max-w-lg w-full">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <div className="mb-4">
            <h3 className="text-gray-300">Username: {selectedUser.user_name}</h3>
            <a
              href={selectedUser.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline"
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
              className="px-4 py-2 rounded-[20px] bg-gray-700 text-gray-200 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleCloseModal}
              className="bg-gray-600 text-white px-4 py-2 rounded-[20px] mr-2 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveChanges(selectedUser.score, selectedUser.user_id, selectedUser.user_name)}
              className="bg-blue-500 text-white px-4 py-2 rounded-[20px] hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default AdminDashboard;
