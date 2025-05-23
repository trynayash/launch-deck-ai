
// Developed by Yash Suthar – StartupDeck
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';

const RegisterPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  return (
    <Layout withFooter={false}>
      <div className="container-width py-16 md:py-24">
        <div className="max-w-md mx-auto">
          <AuthForm type="register" />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
