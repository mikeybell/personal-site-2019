import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coming soon</h1>
    <Content />
    <p>
      In the meantime, check me out on
      <Link to="https://github.com/mikeybell/">Github</Link>
    </p>
  </Layout>
);

export default IndexPage;
