import React from 'react';
import "./Form.css";

const Card = (props) => {
    return (
        <div className="create">
            {props.children}
        </div>
    );
};

export default Card;