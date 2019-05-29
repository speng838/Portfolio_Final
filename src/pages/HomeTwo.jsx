import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BannerTwo from "../components/banner/BannerTwo";
import Works from "../components/Works";
import About from "../components/About";
import FunFacts from "../components/FunFacts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team";

class HomeTwo extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar pageName="home" />
            {/* BannerTwo: src/components/banner/BannerTwo.jsx */}
            <BannerTwo />
            {/* Feature: src/components/Feature.jsx */}
            <Team />
            {/* Blog: src/components/Blog.jsx */}
            <About />
            {/* Team: src/components/Team.jsx */}
            <Works />
            {/* About: src/components/About.jsx */}
            <FunFacts />
            {/* Testimonials: src/components/Testimonials.jsx */}
            <Contact />
            {/* Footer: src/components/Footer.jsx */}
            <Footer />
        </React.Fragment>
    );
  }
}

export default HomeTwo;
