import React from "react";
import Layout from "../components/Layout/layout";
import Head from '../components/Head'

const IndexPage = (props) => {
  return (
    <Layout>
      <Head title="Dmitrii Frolov"/>
        <div className="title">
        <h1>Full Stack Web Developer</h1>
        <p>
          Hi! I am <span className="h2">Dmitrii Frolov</span>, a full stack web developer.
        </p>
        <p>Take a look at some of my projects!</p>
      </div>
    </Layout>
  );
};

export default IndexPage;