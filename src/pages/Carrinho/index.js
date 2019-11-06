import React, { Component } from 'react';
import { Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { Creators as CarrinhoActions } from '../../store/ducks/carrinho';
import { Creators as ProdutosActions } from '../../store/ducks/produtos';
import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProductInfo,
  ProductInfoImage,
  ProductInfoDetail,
  ProductInfoDetailTitle,
  ProductInfoDetailPrice,
  ProductInfoRemoveButton,
  ProductTotal,
  ProductTotalAmount,
  ProductTotalAmountInfo,
  ProductTotalPrice,
  ProductTotalAmountDecrement,
  ProductTotalAmountIncrement,
  Footer,
  FooterLabel,
  FooterPrice,
  FooterButton,
  FooterButtonText,
  EmptyCart,
  EmptyCartText,
  EmptyCartButton,
  EmptyCartButtonText,
} from './styles';

class Carrinho extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
	totalCarrinho: PropTypes.number.isRequired,
  }
  state = {
    total: 0
  };
  
  decrement = (product) => {
    const { updateAmountRequest } = this.props;
    updateAmountRequest(product.id, product.amount - 1);
  }

  increment = (product) => {
    const { updateAmountRequest } = this.props;
    updateAmountRequest(product.id, product.amount + 1);
  }

   render() {
    const { totalCarrinho, carrinho, navigation, removeFromCart } = this.props;
	return (
      <Container>
        {carrinho.length > 0 ? (
          <List
            data={carrinho}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product }) => (
              <Product>
                <ProductInfo>
                  <ProductInfoImage source={{ uri: product.image }} />
                  <ProductInfoDetail>
                    <ProductInfoDetailTitle>
                      {product.title}
                    </ProductInfoDetailTitle>
                    <ProductInfoDetailPrice>
                      {product.priceFormatted}
                    </ProductInfoDetailPrice>
                  </ProductInfoDetail>
                  <ProductInfoRemoveButton
                    onPress={() =>
                     removeFromCart(product.id)
                    }
                  >
                    <Icon name="trash-can" size={30} color="#7159c1" />
                  </ProductInfoRemoveButton>
                </ProductInfo>
                <ProductTotal>
                  <ProductTotalAmount>
                    <ProductTotalAmountDecrement
                      onPress={() => !product.loading && this.decrement(product)}
                    >
                      <Icon
                        name="minus-circle"
                        size={30}
                        color={product.loading ? '#cecece' : '#7159c1'}
                      />
                    </ProductTotalAmountDecrement>
                    <ProductTotalAmountInfo>
                      {product.amount || 0}
                    </ProductTotalAmountInfo>
                    <ProductTotalAmountIncrement
                      onPress={() => !product.loading && this.increment(product)}
                    >
                      <Icon
                        name="plus-circle"
                        size={30}
                        color={product.loading ? '#cecece' : '#7159c1'}
                      />
                    </ProductTotalAmountIncrement>
                  </ProductTotalAmount>
                  <ProductTotalPrice>{formatPrice(product.price * product.amount)}</ProductTotalPrice>
                </ProductTotal>
              </Product>
            )}
            ListFooterComponent={
              <Footer>
                <FooterLabel>Total</FooterLabel>
                <FooterPrice>{totalCarrinho}</FooterPrice>
                <FooterButton onPress={() => navigation.navigate('Entrega')}>
                  <FooterButtonText>Finalizar compra</FooterButtonText>
                </FooterButton>
              </Footer>
            }
          />
        ) : (
          <EmptyCart>
            <Icon name="cart-off" size={72} color="#999999" />
            <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
            <EmptyCartButton onPress={() => navigation.navigate('Home')}>
              <EmptyCartButtonText>Voltar as compras</EmptyCartButtonText>
            </EmptyCartButton>
          </EmptyCart>
        )}
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  carrinho: state.carrinho,
  produtos: state.produtos,
  totalCarrinho: formatPrice(
      state.carrinho.reduce((sumTotal, product) => {
        return sumTotal + product.amount * product.price;
      }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CarrinhoActions, ...ProdutosActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrinho);