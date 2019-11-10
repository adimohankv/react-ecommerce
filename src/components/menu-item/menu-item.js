import React from 'react';

import './menu-item.scss';

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">props.title</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default MenuItem;