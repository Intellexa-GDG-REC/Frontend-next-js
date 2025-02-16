'use client';
import { useState, useEffect, useId, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw, Trophy, Medal, Award } from "lucide-react";


type LeaderBoardItem = {
  user_id: number;
  user_name: string;
  github_username: string;
  github_url: string;
  pr_count: number;
  score: number;
};

const getScale = (index: number) => {
  return index === 1 ? "scale-100" : "scale-75";
};

const RankBadge = ({ rank }: { rank: number }) => {
  const getBadgeStyle = (rank: number) => {
    switch (rank) {
      case 1: return "bg-amber-500/20 text-amber-500 border-amber-500/50";
      case 2: return "bg-gray-300/20 text-gray-300 border-gray-300/50";
      case 3: return "bg-amber-700/20 text-amber-700 border-amber-700/50";
      default: return "bg-gray-800 text-gray-400 border-gray-700";
    }
  };

  const getIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4" />;
      case 2: return <Medal className="w-4 h-4" />;
      case 3: return <Award className="w-4 h-4" />;
      default: return rank;
    }
  };

  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();



  return (
    <div className={`flex items-center justify-center w-8 h-8 border rounded-lg ${getBadgeStyle(rank)}`}>
      {getIcon(rank)}
    </div>
  );
};



export default function Leaderboard() {
  const [data, setData] = useState<LeaderBoardItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;
  const [selectedUser, setSelectedUser] = useState<LeaderBoardItem | null>(null);
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.gitrecquest.tech/leaderboard`);
      const responseData = await response.json();
      if (Array.isArray(responseData)) {
        setData(responseData);
        setTotalPages(Math.ceil(responseData.length / itemsPerPage) || 1);
      }
    } catch (error) {
      console.error("Failed to fetch leaderboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleUserClick = (user: LeaderBoardItem) => {
    setSelectedUser(user);
  };
  const leader = () => {
    if (data.length < 3) return null;

    const reorderedData = [data[1], data[0], data[2]];
    return reorderedData.map((item, index) => (
      <div key={item.user_id} className={`w-full hover:bg-indigo-500 hover:shadow-lg p-6 shadow-xl rounded-[10px] bg-gradient-to-r from-blue-500 to-purple-600 ${getScale(index)}`}>
        <div className="flex flex-col items-center text-white">
          <img
            src={`https://placehold.co/100x100/purple/white?text=${item.github_username.charAt(0).toUpperCase()}&font=montserrat`}
            alt={item.github_username}
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
          <p className="mt-4 text-2xl font-bold">{item.user_name}</p>
        </div>
      </div>
    ));
  };
  const closeModal = () => {
    setSelectedUser(null);
  };
  function setActive(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] w-screen text-white">
      <motion.div className="mx-auto px-4 py-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center py-10">
          <h1 className="text-2xl md:text-5xl font-bold text-white">Gitrecquest || Top Performers</h1>
          <div className="flex justify-center w-full gap-5 mt-10">{leader()}</div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex-grow text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">Leaderboard</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchData}
            className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700"
          >
            <RotateCw className="w-5 h-5 text-gray-400" />
          </motion.button>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-3 text-left text-gray-400 font-medium">Rank</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">Player</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">PRs</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">Score</th>
              </tr>
            </thead>
            <tbody>
              {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                <motion.tr
                  key={item.user_id}
                  onClick={() => handleUserClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer"
                >
                   <td className="px-4 py-4"><RankBadge rank={index + 1} /></td>
                  <td className="px-4 py-4 flex items-center space-x-3">
                    <img
                      src={`https://placehold.co/100x100/purple/white?text=${item.github_username.charAt(0).toUpperCase()}`}
                      alt={item.github_username}
                      className="w-10 h-10 rounded-xl"
                    />
                    <a   className="text-white hover:text-blue-400">
                      {item.user_name || item.github_username}
                    </a>
                  </td>
                  <td className="px-4 py-4">{item.pr_count}</td>
                  <td className="px-4 py-4">{item.score}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between">
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      </motion.div>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-[20px] w-[400px] text-white shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{selectedUser.user_name || selectedUser.github_username}</h2>
            <p><strong>GitHub:</strong> <a href={selectedUser.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{selectedUser.github_url}</a></p>
            <p><strong>PRs:</strong> {selectedUser.pr_count}</p>
            <p><strong>Score:</strong> {selectedUser.score}</p>
          

            <button onClick={closeModal} className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-[20px]">
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
