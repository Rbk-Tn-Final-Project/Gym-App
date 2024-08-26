import React, { useState } from 'react';
import image from "../../assets/yellowPass.png";
import image2 from "../../assets/bluePass.png";
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/home2.png';
import img2 from '../../assets/home.png';
import img3 from '../../assets/home.png';
import './Offres.css';

const Offres = () => {
    const [showBluePass, setShowBluePass] = useState(true);

    return (
        <div>
            <div className='buttonHide'>
                <button onClick={() => setShowBluePass(true)}>Show Blue Pass</button>
                <button onClick={() => setShowBluePass(false)}>Show Yellow Pass</button>
            </div>

            {showBluePass && (
                <div className="container6">
                    <div className="header1">
                        <img src={image2} alt="Blue Pass-Sport" />
                    </div>
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>12 MOIS</th>
                                <th>6 MOIS</th>
                                <th>3 MOIS</th>
                                <th>1 MOIS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,370DT</td>
                                <td>860DT</td>
                                <td>510DT</td>
                                <td>190DT</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="note">
                        *Pour le Blue Pass-Sport par prélèvement vous serez invités à effectuer un paiement initial de 210 DT. Choisissez la date de votre prélèvement, un montant de 105DT/Mois sera prélevé automatiquement de votre compte bancaire avec un engagement d’une durée minimale d’un an.
                    </div>
                    <div className="conditions">
                        <h3>CONDITIONS DE VENTE :</h3>
                        <p>Les frais d'inscription de 45 DT sont payés uniquement lors de la première inscription.</p>
                        <p>Les abonnements ne sont ni remboursables ni transférables.</p>
                        <p>En cas de perte, la carte membre sera remplacée moyennant 30 DT.</p>
                    </div>
                </div>
            )}

            {!showBluePass && (
                <div className="container6">
                    <div className="header2">
                        <img src={image} alt="Yellow Pass-Sport" />
                    </div>
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>12 MOIS</th>
                                <th>6 MOIS</th>
                                <th>3 MOIS</th>
                                <th>1 MOIS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,370DT</td>
                                <td>860DT</td>
                                <td>510DT</td>
                                <td>190DT</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="note">
                        *Pour le Yellow Pass-Sport par prélèvement vous serez invités à effectuer un paiement initial de 210 DT. Choisissez la date de votre prélèvement, un montant de 105DT/Mois sera prélevé automatiquement de votre compte bancaire avec un engagement d’une durée minimale d’un an.
                    </div>
                    <div className="conditions">
                        <h3>CONDITIONS DE VENTE :</h3>
                        <p>Les frais d'inscription de 45 DT sont payés uniquement lors de la première inscription.</p>
                        <p>Les abonnements ne sont ni remboursables ni transférables.</p>
                        <p>En cas de perte, la carte membre sera remplacée moyennant 30 DT.</p>
                    </div>
                </div>
            )}

          
        </div>
    );
};

export default Offres;
