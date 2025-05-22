
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Layout from '@/components/layout/Layout';

const RegisterPage = () => {
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
