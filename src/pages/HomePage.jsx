import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection heightClass="h-[300px] md:h-[500px]" />
      <FeaturedProducts />
      <CategorySection />
      </Layout>
    </>
  );
};

export default HomePage;
