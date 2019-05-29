import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    SectionbgTitle: "About",
    sectionTitle: "About Me",
    sectionDescription:
        "Below are several sections about me. Each section pertains to a specific topic (about me) which I elaborate on.",
        aboutsData: [
        {
            Icon: "icofont-binoculars",
            title: "Background",
            content: "I have an associates degree in Business Administration from Northern Virginia Community College. Additionally I have taken several classes in mechanical engineering such as Fluid Mechanics, ThermoDynamics and Statics at Virginia Commomwealth University. I am also familiar with the Solid Works program and C programming language and have superior marks in all 7 math classes ranging from discrete math to all levels of calculus. Finally, I also hold a certificate in Full-Stack Web Development from the George Washington University.",
        },
        {
            Icon: "icofont-direction-sign",
            title: "My Approach",
            content: "In life, I like to be aware of my surroundings and pick apart and analyze all situations through either an emotional or rational perspective. Likewise, in programming and similarly in math, I like to use the rational approach in fixing errors and reaching solutions for a finished product. I look at all the variables, variable instructions and assignments and logically alter code in pursuit of the best working solution. This means clear and concise programs leading to fast and favorable websites for the world to use.  ",
        },
        {
            Icon: "icofont-at",
            title: "Technologies",
            content: "In the front-end design, I am familiar with the use of HTML and CSS. In the coding for the front-end, I am fluent in Javascript, Jquery and React.js. In the back-end, I understand and enjoy contructing databases using My-SQL and MongoDB. I'm also familiar with Node.js and Express.js.",
        }
        
        //{
        //    Icon: "icofont-users-social",
        //    title: "Our Rich Experience",
        //    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        //},
        //{
        //    Icon: "icofont-money",
        //    title: "Value for Money",
        //    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        //},
        //{
        //    Icon: "icofont-unique-idea",
        //    title: "Flexible Development",
        //    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        //},
    ]
};

export default About;
