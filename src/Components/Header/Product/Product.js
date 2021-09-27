import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { name, img, salary, role, age, country } = props.product;
    const element = <FontAwesomeIcon icon={faUserFriends} />;
    return (
        <div className="my-product">
            <div className="my-img">
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>

            <h3>Role:{role}</h3>
            <h3>Country:{country}</h3>
            <h4>Age:{age}</h4>
            <h4>$:{salary}</h4>
            <button
                onClick={() => props.handleAddToCart(props.product)}
                className="my-btn">{element}Add to Team</button>
        </div>
    );
};

export default Product;