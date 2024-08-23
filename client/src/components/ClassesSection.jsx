import React from 'react';
import './Components.css'
import class1 from '../assets/class-1.jpg';
import class2 from '../assets/class-2.jpg'
import class3 from '../assets/class-3.jpg'
import class4 from '../assets/class-4.jpg'
import class5 from '../assets/class-5.jpg'


const ClassesSection = () => {
    return (
        <section className="classes-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Our Classes</span>
                            <h2>WHAT WE CAN OFFER</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="class-item">
                            <div className="ci-pic">
                                <img src={class1} alt="Weightlifting" />
                            </div>
                            <div className="ci-text">
                                <span>STRENGTH</span>
                                <h5>Weightlifting</h5>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="class-item">
                            <div className="ci-pic">
                                <img src={class2} alt="Indoor cycling" />
                            </div>
                            <div className="ci-text">
                                <span>Cardio</span>
                                <h5> cycling</h5>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="class-item">
                            <div className="ci-pic">
                                <img src={class3} alt="Kettlebell power" />
                            </div>
                            <div className="ci-text">
                                <span>STRENGTH</span>
                                <h5>Kettlebell power</h5>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="class-item">
                            <div className="ci-pic">
                                <img src={class4} alt="Indoor cycling" />
                            </div>
                            <div className="ci-text">
                                <span>Cardio</span>
                                <h4>Indoor cycling</h4>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="class-item">
                            <div className="ci-pic">
                                <img src={class5} alt="Boxing" />
                            </div>
                            <div className="ci-text">
                                <span>Training</span>
                                <h4>Boxing</h4>
                                <a href="/Login"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
