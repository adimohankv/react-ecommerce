import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(collectionKey => collections[collectionKey]) : []
)

export const selectCollections = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
)

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)