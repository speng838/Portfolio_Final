import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";




const images = [
    require("../assets/img/work-1.jpg"),
    require("../assets/img/work-2.jpg"),
    require("../assets/img/work-3.jpg"),
    require("../assets/img/work-4.jpg"),
    require("../assets/img/work-5.jpg"),
    require("../assets/img/work-6.jpg"),
    require("../assets/img/work-7.jpg"),
    require("../assets/img/work-8.jpg"),
    require("../assets/img/work-9.jpg"),
    require("../assets/img/work-10.jpg"),
    require("../assets/img/work-11.jpg"),
    require("../assets/img/work-12.jpg"),
    require("../assets/img/work-13.jpg"),
  ];
  
  const smallImages = [
      require("../assets/img/work-1.jpg"),
      require("../assets/img/work-2.jpg"),
      require("../assets/img/work-3.jpg"),
      require("../assets/img/work-4.jpg"),
      require("../assets/img/work-5.jpg"),
      require("../assets/img/work-6.jpg"),
      require("../assets/img/work-7.jpg"),
      require("../assets/img/work-8.jpg"),
      require("../assets/img/work-9.jpg"),
      require("../assets/img/work-10.jpg"),
      require("../assets/img/work-11.jpg"),
      require("../assets/img/work-12.jpg"),
      require("../assets/img/work-13.jpg")
      
  ];

class Works extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                        
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[0]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "11"
                                                            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                            
                                                        </span>
                                                        
                                                    </li>
                                                    
                                                </ul>
                                                
                                            </div>
                                            <p>Letter Guess Game</p>
                                        </figure>
                                    </div>
                                    
                                    <a href = "www.yahoo.com">Assignment 1</a>
                                </div>
                                

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[1]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                            
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Crystal Collectors Game</p>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[2]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Totally Trivial Trivia</p>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[3]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Marvel Gif Site</p>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[4]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Train Scheduler</p>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[5]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Liri-Bot</p>
                                        </figure>
                                    </div>
                                    <a href = "https://drive.google.com/file/d/1NhSjM4QHac-4C9caXzGQLsLNJQd9O3VJ/view">Visit Site</a>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[6]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 6, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Friend-Finder</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[7]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 7, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Make a Burger and Eat it</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[8]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 8, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>News-Scraper</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[9]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 9, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Click-It-Only-Once Game</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[10]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 10, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Google Book Searcher</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[11]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 11, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>The Commuter (Project 1)</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[12]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 12, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Madden Playbook Decision Maker (Project 2)</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[13]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 13, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Something</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[14]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 14, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Something</p>
                                        </figure>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[15]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 15, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Something</p>
                                        </figure>
                                    </div>
                                </div>
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Works.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};


//Default Props
Works.defaultProps = {
    SectionbgTitle: "Portfolio",
    sectionTitle: "My Work",
    sectionDescription:
        "Here you can find the work I have done in crafting websites and apps into completion. Please take the time to browse through each masterpiece",
    
};

export default Works;
