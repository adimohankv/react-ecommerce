import React from 'react';
import { connect } from 'react-redux'; 

import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({id, ...collection}) => {
                return <CollectionPreview key={id} {...collection}/>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        collections: selectCollectionsForOverview(state)
    }
}

export default connect(mapStateToProps)(CollectionOverview);