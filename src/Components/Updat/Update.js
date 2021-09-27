import React from 'react';
import './Update.css';
const Update = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
    }
    let name = '';
    for (const product of cart) {
        name = name + '  ' + product.name;
    }
    return (
        <div>
            <h1>Our Goal</h1>
            <h2>New Job Offer</h2>
            <h1>Name: {name}</h1>
            <h4>Total Engineer added:{props.cart.length}</h4>
            <h4>Total:$ {total}</h4>
            <button className="submit-btn">Follow Us</button>
        </div>
    );
};

export default Update;