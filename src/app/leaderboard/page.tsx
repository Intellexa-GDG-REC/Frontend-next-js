'use client';
import { useState } from "react";
import Image from 'next/image'
import { Leaderboard as LeaderboardComponent } from "@/components/leaderboard";

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
    <main className="text-white">
      <LeaderboardComponent></LeaderboardComponent>
    </main>
  );
}
