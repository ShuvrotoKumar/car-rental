import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in implementation
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    loading,
    signIn,
    signOut
  };
}
