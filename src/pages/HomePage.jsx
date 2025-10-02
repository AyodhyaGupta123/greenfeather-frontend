import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DiscoverySection from '../components/home/AmazonSections';
import CategorySection from '../components/home/CategorySection';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection heightClass="h-[300px] md:h-[500px]" />
      <DiscoverySection />
      <CategorySection />
      </Layout>
    </>
  );
};

export default HomePage;
