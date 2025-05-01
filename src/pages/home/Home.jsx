import React from "react";
import Product from "../../components/common/products/Product";
import Layout from "../../components/common/layout/Layout";
import Hero from "../../components/common/hero/Hero";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Product/>
    </Layout>
  );
};

export default Home;
