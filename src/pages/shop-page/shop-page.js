import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import Collection from '../collection/collection';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    constructor() {
        super();

        this.unSubscribeFromSnapshot = null;
        this.state = {
            isLoading: true
        }
    };

    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    };

    render() {
        const {match, isCollectionFetching} = this.props;

        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    }
                />
                <Route 
                    path={`${match.path}:collectionId`} 
                    render={(props) => 
                        <CollectionWithSpinner isLoading={isCollectionFetching} {...props} />
                    }
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isCollectionFetching: selectIsFetching(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);