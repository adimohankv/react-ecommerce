import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = (state) => {
    return {
        isLoading: selectIsFetching(state)
    }
};

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;