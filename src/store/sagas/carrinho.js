import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
// import Navigation from '../../services/navigation';

import { Creators as CarrinhoActions} from '../ducks/carrinho';


export function* addToCart(data) {

  const id = data.payload.id;
  const product = yield select(state => state.carrinho.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = product ? product.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    yield put(CarrinhoActions.addToCartFailed(id));

    showMessage({
      message: 'Quantidade solicitada fora de estoque.',
      type: 'danger',
    });

    return;
  }

  if (product) {
    yield put(CarrinhoActions.updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(CarrinhoActions.addToCartSuccess(data));

    // Navigation.navigate('Cart');
  }
}

export function* updateAmount(data) {
  const id = data.payload.id;
  const amount = data.payload.amount;
  if (amount <= 0) {
    yield put(
      CarrinhoActions.updateAmountFailed(id, 'Quantidade solicitada não pode ser zero.')
    );

    showMessage({
      message: 'Quantidade solicitada não pode ser zero.',
      type: 'danger',
    });

    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    yield put(
      CarrinhoActions.updateAmountFailed(id, 'Quantidade solicitada não pode ser zero.')
    );

    showMessage({
      message: 'Quantidade solicitada fora de estoque.',
      type: 'danger',
    });

    return;
  }

  yield put(CarrinhoActions.updateAmountSuccess(id, amount));
}

