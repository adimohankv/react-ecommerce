import React from 'react';

import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = (props) => {
    return (
        <div className="collection-preview">
            <div className="title">{props.title.toUpperCase()}</div>
            <div className="preview">
                {props.items
                .filter((item, index) => index < 4)
                .map(({id, ...item}) => {
                    return <CollectionItem key = {id} {...item}/> 
                })}
            </div>
        </div>
    )
};

export default CollectionPreview;