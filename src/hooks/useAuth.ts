import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify');
      const data = await response.json();

      if (data.authenticated) {
        setUser(data.user);
      } else {
        router.push('/super-admin');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/super-admin');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/super-admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return { user, loading, logout };
}
