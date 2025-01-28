'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/auth'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { setUser } = useAuthStore()

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/self`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const userStats = await response.json();
          setUser(userStats)
          return userStats;
        } else {
          console.log('Failed to fetch user stats:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchUserStats();
  }, [setUser])

  return <>{children}</>
}