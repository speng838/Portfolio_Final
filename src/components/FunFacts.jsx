import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from 'react-animate-on-scroll';

class FunFacts extends Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };
  render() {
    return (
        <React.Fragment>
            <section className="fun-facts ptb-100">
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
                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-tasks" />
                                </div>
                                <p>Finished Assignments</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 13
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-checked" />
                                </div>
                                <p>Completed Projects</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 3
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-trophy-alt" />
                                </div>
                                <p>Certificate Earned</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 1
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
FunFacts.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string
};

//Default Props
FunFacts.defaultProps = {
    SectionbgTitle: "Fun Facts",
    sectionTitle: "Some good 'ol' stats",
    sectionDescription:
        "I enjoyed collaborating in teams to deliver complete and useful websites using state of the art technologies such as React, Node.js, and Javascript. The completed assignments and projects are a result of my artless desire to understand thoroughly and apply the material I learned in class to fruition. I am also full of alacrity to apply what I have achieved to what I will be doing in the work force. ",
};

export default FunFacts;
