'use client';
import { useState } from "react";
import Image from 'next/image'




type LeaderBoardItem = {
  username: string;
  user_url: string;
  avatar_url: string;
  score: number;
};

const mockData: LeaderBoardItem[] = [
  {
    username: "JohnDoe",
    user_url: "https://example.com/johndoe",
    avatar_url: "https://via.placeholder.com/50",
    score: 1200,
  },
  {
    username: "JaneSmith",
    user_url: "https://example.com/janesmith",
    avatar_url: "https://via.placeholder.com/50",
    score: 1100,
  },
  {
    username: "Player123",
    user_url: "https://example.com/player123",
    avatar_url: "https://via.placeholder.com/50",
    score: 900,
  },
  {
    username: "AliceBlue",
    user_url: "https://example.com/aliceblue",
    avatar_url: "https://via.placeholder.com/50",
    score: 1300,
  },
  {
    username: "BobGreen",
    user_url: "https://example.com/bobgreen",
    avatar_url: "https://via.placeholder.com/50",
    score: 950,
  },
  {
    username: "CharlieRed",
    user_url: "https://example.com/charliered",
    avatar_url: "https://via.placeholder.com/50",
    score: 1050,
  },
];

export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const currentData = mockData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRefresh = () => {
    // Refresh logic (in this case, just reset the page to 1)
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-5">
      {/* Background with texture */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 30%, #4084ec, transparent), radial-gradient(circle at 70% 70%, #334155, transparent)',
          }}
        ></div>
      </div>

      {/* Leaderboard container */}
      <div className="relative w-full max-w-4xl bg-gray-800 shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="mx-auto text-3xl font-bold text-center text-gray-100">Leaderboard</h1>
          <button className="flex items-center justify-center p-2 bg-white rounded-full hover:bg-gray-600 transition">
 <Image
      
       src={"/refresh.svg"}
       width={15}
       height={15}
       alt="Picture of the author"
       className='cursor-pointer'
     />
</button>

        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="px-4 py-2 text-left">Rank</th>
                <th className="px-4 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr
                  key={item.username}
                  className="border-t border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2 text-gray-300">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={item.avatar_url}
                      alt={`${item.username}'s avatar`}
                      className="w-8 h-8 rounded-full mr-4"
                    />
                    <a
                      href={item.user_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {item.username}
                    </a>
                  </td>
                  <td className="px-4 py-2 text-gray-300">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:bg-gray-600 transition"
          >
            Previous
          </button>
          <div className="text-gray-300">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
