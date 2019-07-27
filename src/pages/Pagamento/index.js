import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Creators as PedidoActions } from "../../store/ducks/pedido";
import { ScrollView } from "react-native";
import { Container, Imagem, MeioPagamento, Texto, ContainerPagamentos } from "./styles";

class Pagamento extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    pedidoRequest: PropTypes.func.isRequired,
    setFormaPagamento: PropTypes.func.isRequired
  };

  paginaInicial = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  cartao = () => {
    const { navigation } = this.props;
    navigation.navigate("Cartao");
  };

  dinheiro = () => {
    //Finalizar o pedido
    const { pedidoRequest, setFormaPagamento } = this.props;
    setFormaPagamento("DINHEIRO");
    pedidoRequest();
  };

  render() {
    return (
        <Container>
          <ContainerPagamentos>
            <MeioPagamento onPress={this.dinheiro}>
              <Imagem source={require("../../assets/purse.png")} />
              <Texto>Dinheiro</Texto>
            </MeioPagamento>

            <MeioPagamento onPress={this.cartao}>
              <Imagem source={require("../../assets/mastercard.png")} />
              <Texto>Cartão de Crédito</Texto>
            </MeioPagamento>
          </ContainerPagamentos>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  pedido: state.pedido
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PedidoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagamento);
