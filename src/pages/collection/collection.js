import React from 'react';
import { connect } from 'react-redux';

import CollectionItems from '../../components/collection-item/collection-item';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection.scss'

const Collection = ({collection}) => {
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => {
                        return <CollectionItems item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollections(ownProps.match.params.collectionId)(state)
    }
};


export default connect(mapStateToProps)(Collection);