import { all, takeLatest } from "redux-saga/effects";

import { Types as ProdutosTypes } from "../ducks/produtos";
import { Types as CarrinhoTypes } from "../ducks/carrinho";
import { Types as PedidoTypes } from "../ducks/pedido";

import { fetchProducts, fetchSearchProducts } from "./produtos";
import { addToCart, updateAmount } from "./carrinho";
import { getCEP, criarPedido } from "./pedido";


export default function* rootSaga() {
  return yield all([
    takeLatest(ProdutosTypes.FETCH_REQUEST, fetchProducts),

    takeLatest(ProdutosTypes.FETCH_SEARCH_REQUEST, fetchSearchProducts),

    takeLatest(CarrinhoTypes.ADD_REQUEST, addToCart),

    takeLatest(CarrinhoTypes.UPDATE_AMOUNT_REQUEST, updateAmount),

    takeLatest(PedidoTypes.CEP_REQUEST, getCEP),

    takeLatest(PedidoTypes.REQUEST, criarPedido)
  ]);
}
