import React from 'react';

import './form-input.scss';

const FormInput = ({handleChange, label, ...props}) => {
    return (
        <div className="group">
            { 
                label 
                ? (<label className={`${props.value.length ? "shrink" : ""} form-input-label`}>{label}</label>)
                : null
            }
            <input className="form-input" onChange={handleChange} {...props} />
        </div>
    )
};

export default FormInput;