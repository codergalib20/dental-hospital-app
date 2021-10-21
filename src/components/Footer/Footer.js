import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div style={{background:'#333'}} className="py-5">
               <div className="container row mx-auto">
                    <div className="col-6 col-lg-3">
                        <ul>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/">Home</NavLink>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <ul>
                            <li className="text-white h6">Something</li>
                            <li className="text-white h6">Something</li>
                            <li className="text-white h6">Something</li>
                            <li className="text-white h6">Something</li>
                            <li className="text-white h6">Something</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div>
                            <p className="text-white h6"><strong className="text-danger">Facebook :</strong></p>
                            <p className="text-white h6"><strong className="text-danger">Instagram :</strong></p>
                            <p className="text-white h6"><strong className="text-danger">Linkdin :</strong></p>
                            <p className="text-white h6"><strong className="text-danger">Email :</strong></p>
                            <p className="text-white h6"><strong className="text-danger">Mobile :</strong></p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <img className="img-fluid" src="https://i.ibb.co/PWJDGGZ/141701025-man-using-credit-card-in-shop-cashless-payment-with-pos-terminal.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-dark py-4">
                <p className="text-white text-center">Thanks for everything <span className="text-danger">&copy; 2021</span> dental page</p>
            </div>
        </div>
    );
};

export default Footer;