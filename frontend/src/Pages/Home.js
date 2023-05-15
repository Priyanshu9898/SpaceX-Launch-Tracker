import React from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <MainPage />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
