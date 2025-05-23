
// Developed by Yash Suthar – StartupDeck
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  return (
    <Layout withFooter={false}>
      <div className="container-width py-16 md:py-24">
        <div className="max-w-md mx-auto">
          <AuthForm type="login" />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
