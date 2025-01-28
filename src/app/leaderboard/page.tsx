'use client';
import { useState, useEffect } from "react";
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

const RankBadge = ({ rank }: { rank: number }) => {
  const getBadgeStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-amber-500/20 text-amber-500 border-amber-500/50";
      case 2:
        return "bg-gray-300/20 text-gray-300 border-gray-300/50";
      case 3:
        return "bg-amber-700/20 text-amber-700 border-amber-700/50";
      default:
        return "bg-gray-800 text-gray-400 border-gray-700";
    }
  };

  const getIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-4 h-4" />;
      case 2:
        return <Medal className="w-4 h-4" />;
      case 3:
        return <Award className="w-4 h-4" />;
      default:
        return rank;
    }
  };

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

  const fetchData = async (pageNum: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/leaderboard`);
      const responseData = await response.json();
      setData(responseData || []);
      setTotalPages(Math.ceil(responseData.length / itemsPerPage) || 1);
    } catch (error) {
      console.error("Failed to fetch leaderboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] w-screen">
      <motion.div 
        className="mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-5xl font-bold text-white text-center w-full">
              Leaderboard
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fetchData(currentPage)}
              className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <RotateCw className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>

          {/* Leaderboard Table */}
          <div className="overflow-x-auto">
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
                {data.map((item, index) => (
                  <motion.tr
                    key={item.user_id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <RankBadge rank={(currentPage - 1) * itemsPerPage + index + 1} />
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10">
                          <img
                            src={`https://placehold.co/100x100/purple/white?text=${item.github_username.charAt(0).toUpperCase()}&font=montserrat`}
                            alt={`${item.github_username}'s avatar`}
                            className="rounded-xl object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <a
                            href={item.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors font-medium"
                          >
                            {item.user_name || item.github_username}
                          </a>
                          <span className="text-sm text-gray-500">@{item.github_username}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-500/20 text-purple-400">
                        {item.pr_count}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-gray-300 font-semibold">{item.score}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-800 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </motion.button>

            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-800 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}