import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/tron-le-aAn-_iTks4E-unsplash.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Visit your dream destination</h1>
          <p>We make your dreams come true</p>
          <Link to="/menu">
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
