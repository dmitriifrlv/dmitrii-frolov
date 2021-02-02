import React from "react";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import Layout from "../components/Layout/layout";
import Head from '../components/Head'

const AboutPage = (props) => {
  return (
    <Layout
    >
         <Head title="About"/>
       
        <AboutMeCard/>
     
    </Layout>
  );
};

export default AboutPage;
