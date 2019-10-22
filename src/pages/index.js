import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Content from '../components/content';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Content />
  </Layout>
);

export default IndexPage;
