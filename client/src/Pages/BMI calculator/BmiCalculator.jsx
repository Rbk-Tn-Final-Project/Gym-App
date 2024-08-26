import React, { useState } from "react";
import './BmiCalculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || isNaN(height) || !weight || isNaN(weight)) {
      alert("Please enter valid height and weight.");
      return;
    }
    const bmiValue = (weight / (height / 100) ** 2).toFixed(1);
    setBmi(bmiValue);
    determineStatus(bmiValue);
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("Healthy");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <>
    <Navbar/>
     <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>BMI calculator</h2>
                                <div className="bt-option">
                                    <a href="/">Home</a>
                                    <a href="#">Pages</a>
                                    <span>BMI calculator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <section className="bmi-calculator-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title chart-title">
              <span>Check your body</span>
              <h2>BMI CALCULATOR CHART</h2>
            </div>
            <div className="chart-table">
              <table>
                <thead>
                  <tr>
                    <th>BMI</th>
                    <th>WEIGHT STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="point">Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td className="point">18.5 - 24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td className="point">25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td className="point">30.0 - and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title chart-calculate-title">
              <span>Check your body</span>
              <h2>CALCULATE YOUR BMI</h2>
            </div>
            <div className="chart-calculate-form">
              <p>
                HELLO 
              </p>
              <form onSubmit={calculateBMI}>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="height">Height (cm):</label>
                    <input
                      id="height"
                      type="text"
                      placeholder="Height / cm"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                      id="weight"
                      type="text"
                      placeholder="Weight / kg"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="age">Age:</label>
                    <input
                      id="age"
                      type="text"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                
                  <div className="col-lg-12">
                    <button type="submit">Calculate</button>
                  </div>
                </div>
              </form>
              {bmi && (
                <div className="bmi-result">
                  <h3>Your BMI is: {bmi}</h3>
                  <p>Status: {status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="gettouch-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-map-marker"></i>
                                <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-mobile"></i>
                                <ul>
                                    <li>125-711-811</li>
                                    <li>125-668-886</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text email">
                                <i className="fa fa-envelope"></i>
                                <p>Support.gymcenter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </>
  );
};

export default BMICalculator;
