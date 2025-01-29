'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(null); 
    setLoading(true); 
  
    try {
      const response = await fetch("http://localhost:8080/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username: email, password }),
      });
  
     
      if (response.status === 406) {
        const data = await response.json();
        throw new Error(data.message || "Invalid credentials");
      }
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to login");
      }
  
     
      const allCookies = document.cookie;
      if (allCookies.includes("admin_auth_")) {
       router.replace("/admindashboard")
        
      }
  
    
      const data = await response.json();
      console.log(`Server response:`, data);
  
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <main className="flex items-center justify-center bg-gray-900 p-1 relative min-h-screen w-full">
  {/* Blue background layer */}
  <div className="absolute inset-0 z-10">
    <div
      className="absolute inset-0 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 30%,#4084ec, transparent), radial-gradient(circle at 70% 70%, #334155, transparent)",
      }}
    ></div>
  </div>

  {/* Main content layer */}
  <div className="w-full h-1/2 max-w-md bg-gray-800 shadow-md rounded-lg p-6 z-20">
    <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
      Admin Login
    </h1>
    {error && (
      <p className="text-red-500 text-center font-medium mb-4">{error}</p>
    )}
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded-lg font-bold transition ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  </div>
</main>

  );
}
