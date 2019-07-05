import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Content from '../components/content';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Content />
    <Image />
  </Layout>
);

export default IndexPage;
