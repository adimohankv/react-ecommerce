import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.scss';

const CollectionItem = (props) => {
    const { imageUrl,name,price } = props.item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}}
            > </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button className="inverted" onClick={()=>{props.addItem(props.item)}}>ADD TO CART</Button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);