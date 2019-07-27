import { combineReducers } from "redux";

import produtos from "./produtos";
import carrinho from "./carrinho";
import pedido from "./pedido";

export default combineReducers({
  produtos,
  carrinho,
  pedido
});
