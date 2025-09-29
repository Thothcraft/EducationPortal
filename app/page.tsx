'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('auth_token');
    const username = localStorage.getItem('username');
    
    if (token && username && username !== 'undefined') {
      // Redirect to courses page if authenticated
      router.push('/courses');
    } else {
      // Clear any invalid tokens and redirect to auth
      localStorage.removeItem('auth_token');
      localStorage.removeItem('username');
      localStorage.removeItem('user_role');
      localStorage.removeItem('student_id');
      router.push('/auth');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
  );
}
