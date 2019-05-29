import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";
import Works from "../components/Works";
import About from "../components/About";
import FunFacts from "../components/FunFacts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team";

class HomeOne extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar pageName="home" />
            {/* BannerOne: src/components/banner/BannerOne */}
            <BannerOne />
            {/* Services: src/components/Services.jsx */}
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

export default HomeOne;
