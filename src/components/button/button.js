import React from 'react';

import './button.scss';

const Button = ({ children, className, ...props}) => {
    return (
        <button className={`${className} custom-button`} {...props}>
            {children}
        </button>
    )
};

export default Button;