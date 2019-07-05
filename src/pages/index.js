import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Mike Bell</h1>
    <Content />
    <Image />
  </Layout>
);

export default IndexPage;
