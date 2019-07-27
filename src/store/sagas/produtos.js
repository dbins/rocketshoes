import { call, put, all, takeLatest } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Creators as ProdutosActions} from '../ducks/produtos';

export function* fetchProducts() {
  
  try {
    const response = yield call(api.get, '/products');

    if (response.status >= 200 && response.status < 300) {
      const products = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      yield put(ProdutosActions.fetchSuccess(products));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(ProdutosActions.fetchFailed(error));

    showMessage({
      message: error.message,
      type: 'danger',
    });
  }
}

export function* fetchSearchProducts(action) {
  
  try {
    const response = yield call(api.get, '/products?title_like=' + action.payload.search.produto);

    if (response.status >= 200 && response.status < 300) {
      const products = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      yield put(ProdutosActions.fetchSearchSuccess(products));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(ProdutosActions.fetchSearchFailed(error));

    showMessage({
      message: error.message,
      type: 'danger',
    });
  }
}
