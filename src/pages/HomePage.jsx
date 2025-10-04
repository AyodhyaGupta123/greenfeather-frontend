import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DiscoverySection from '../components/home/DiscoverySection';
import CategorySection from '../components/home/CategorySection';
import Layout from '../components/layout/Layout';
import ShoppingCategories from '../components/home/ShoppingCategories';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection heightClass="h-[300px] md:h-[500px]" />
      <DiscoverySection />
      <ShoppingCategories />
      <CategorySection />
      </Layout>
    </>
  );
};

export default HomePage;
