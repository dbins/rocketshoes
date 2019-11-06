import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Entrega from "./pages/Entrega";
import Pagamento from "./pages/Pagamento";
import Cartao from "./pages/Pagamento/cartao";
import Pesquisa from "./pages/Pesquisa";
import Index from "./pages/Index";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Index,
      Home,
      Carrinho,
      Entrega,
      Pagamento,
      Cartao,
      Pesquisa
    },
    {
      initialRouteName: "Index",
      headerMode: "none"
    }
  )
);

export default Routes;
