'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

type LeaderBoardItem = {
  user_id: number;
  user_name: string;
  github_username: string;
  github_url: string;
  pr_count: number;
  score: number;
};

export default function Leaderboard() {
  const [data, setData] = useState<LeaderBoardItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  const [totalPages, setTotalPages] = useState(1);


  const fetchData = async (pageNum: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/leaderboard`
      );
      const responseData = await response.json();

      
      setData(responseData || []); 
      setTotalPages(responseData.totalPages || 1); 
      //console.log(responseData.lenght())
    } catch (error) {
      console.error("Failed to fetch leaderboard data:", error);
    }
  };

  
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    console.log("clicked")
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      fetchData(currentPage);
    }
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
          <button
            onClick={() => fetchData(currentPage)}
            className="flex items-center justify-center p-2 bg-white rounded-full hover:bg-gray-600 transition"
          >
            <Image
              src={"/refresh.svg"}
              width={15}
              height={15}
              alt="Refresh leaderboard"
              className="cursor-pointer"
            />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="px-4 py-2 text-left">Rank</th>
                <th className="px-4 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-left">PR Count</th>
                <th className="px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
             {data.map((item, index) => (
                <tr
                  key={item.user_id}
                  className="border-t border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2 text-gray-300">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={ `https://placehold.co/100x100/purple/white?text=${item.github_username.charAt(0).toUpperCase()}&font=montserrat`}
                    // src="https://img.freepik.com/premium-photo/south-indian-girl-hoodie-shirt_905085-77.jpg"
                      alt={`${item.github_username}'s avatar`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <a
                      href={item.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {item.user_name || item.github_username}
                    </a>
                  </td>
                  <td className="px-4 py-2 text-gray-300">{item.pr_count}</td>
                  <td className="px-4 py-2 text-gray-300">{item.score}</td>
                </tr>
              ))}
              {data.length===0?<tr
                  key={"dsf"}
                  className="border-t border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2 text-gray-300">
                    sdfsdf
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={ `https://img.freepik.com/premium-photo/south-indian-girl-hoodie-shirt_905085-77.jpg`}
                    // src="https://img.freepik.com/premium-photo/south-indian-girl-hoodie-shirt_905085-77.jpg"
                      alt={`avatar`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <a
                      href={"sdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                       item.github_username
                    </a>
                  </td>
                  <td className="px-4 py-2 text-gray-300">dsfdsf</td>
                  <td className="px-4 py-2 text-gray-300">kjljkljk</td>
                </tr>:<></>}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600  transition"
          >
            Previous
          </button>
          <div className="text-gray-300">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600  transition"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
