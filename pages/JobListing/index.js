import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JobListing from "../../templates/JobListing/JobListing";

const index = () => {
  return (
    <>
      <Header />
      <JobListing />
      <Footer />
    </>
  );
};

export default index;
