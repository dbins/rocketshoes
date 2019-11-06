import React, { Component } from "react";
import { Alert,ScrollView } from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as PedidoActions } from "../../store/ducks/pedido";
import {
  Container,
  Observacao,
  Content,
  Input,
  Endereco,
  Rua,
  Numero,
  ButtonContent,
  ButtonOrder,
  Loading,
  Error
} from "./styles";

class Entrega extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    pedido: PropTypes.shape({
      endereco: PropTypes.shape({
        rua: PropTypes.string,
        numero: PropTypes.string,
        cidade: PropTypes.string,
        uf: PropTypes.string,
        cep: PropTypes.string
      }),
      observacao: PropTypes.string,
      valor: PropTypes.number.isRequired,
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired,
    cepRequest: PropTypes.func.isRequired,
    pedidoRequest: PropTypes.func.isRequired,
    setObservacao: PropTypes.func.isRequired,
    setRua: PropTypes.func.isRequired,
    setNumero: PropTypes.func.isRequired,
    setCidade: PropTypes.func.isRequired,
	  setValor: PropTypes.func.isRequired,
    setUF: PropTypes.func.isRequired,
  };

  state = {
    cep: "",
    observacao: ""
  };

  redirecionar = page => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  retornarCEP = async () => {
    const { cep } = this.state;
    const { cepRequest } = this.props;

    cepRequest(cep);
  };

  gravarPedido = () => {
    console.tron.log('gravar pedido');
    const { setValor, pedidoRequest } = this.props;
    this.props.pedido.endereco.cep = this.state.cep;
    this.props.pedido.valor = this.props.valor;
	const total = 
      this.props.carrinho.reduce((sumTotal, product) => {
        return sumTotal + product.amount * product.price;
      }, 0);
	setValor(total);
    const cep = this.state.cep;
    let continuar = true;
    let mensagem = "";
    let rua = "";
    let numero = "";
    let bairro = "";
    if (this.props.pedido.endereco.rua) {
      rua = this.props.pedido.endereco.rua;
    }
    if (this.props.pedido.endereco.numero) {
      numero = this.props.pedido.endereco.numero;
    }
    if (this.props.pedido.endereco.bairro) {
      bairro = this.props.pedido.endereco.bairro;
    }
    if (cep == "") {
      continuar = false;
      mensagem = "Por favor informe o CEP!";
    } else {
      if (rua == "") {
        continuar = false;
        mensagem = "Informe a rua";
      } else {
        if (numero == "") {
          continuar = false;
          mensagem += "Informe o número";
        } else {
          if (bairro == "") {
            continuar = false;
            mensagem += "Informe o bairro";
          }
        }
      }
    }
    if (continuar) {
      //pedidoRequest();
      const { navigation } = this.props;
      navigation.navigate("Pagamento");
    } else {
      Alert.alert("PEDIDO", mensagem, [{ text: "FECHAR" }], {
        cancelable: false
      });
    }
  };

  render() {
    const { observacao, cep } = this.state;
    const {
      pedido,
      valor,
      setObservacao,
      setRua,
      setNumero,
      setCidade,
      setUF
    } = this.props;

    return (
      <Container>
        <Content>
          <Observacao
            style={{ textAlignVertical: "top" }}
            multiline
            numberOfLines={5}
            placeholder="Alguma observação?"
            value={pedido.observacao}
            onChangeText={text => setObservacao(text)}
          />

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual seu cep?"
            keyboardType="numeric"
            maxLength={8}
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
            onBlur={this.retornarCEP}
          />

          <Endereco>
            <Rua
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              value={pedido.endereco.rua}
              onChangeText={text => setRua(text)}
            />
            <Numero
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              value={pedido.endereco.numero}
              onChangeText={text => setNumero(text)}
            />
          </Endereco>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            value={pedido.endereco.bairro}
            onChangeText={text => setCidade(text)}
          />
          
            {pedido.loading ? (
              <Loading />
            ) : (
              <ButtonOrder onPress={this.gravarPedido}>
                <ButtonContent>Finalizar</ButtonContent>
              </ButtonOrder>
              
            )}
          
          {pedido.error && <Error>Houve um erro ao gravar o pedido</Error>}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  carrinho: state.carrinho,
  pedido: state.pedido
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PedidoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entrega);
