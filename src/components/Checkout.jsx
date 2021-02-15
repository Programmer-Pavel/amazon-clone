import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"/>
                <div className="checkout__title">
                    <h2>Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;