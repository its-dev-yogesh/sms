'use client'
// pages/index.tsx or any other page/component
import MyForm from '@/components/Test/MyForm';
import React from 'react';


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>My Form</h1>
      <MyForm />
    </div>
  );
};

export default HomePage;
