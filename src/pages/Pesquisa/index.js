import React, { Component,  useEffect, useCallback } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';

import { Creators as CarrinhoActions } from '../../store/ducks/carrinho';
import { Creators as ProdutosActions } from '../../store/ducks/produtos';

import {
  Container,
  List,
  ListProduct,
  ListProductImage,
  ListProductTitle,
  ListProductPrice,
  ListProductButton,
  ListProductButtonText,
  ListProductButtonCart,
  ListProductButtonCartText,
  SearchBarContainer,
  SearchIcon,
  SearchText,
  SearchBarMessage
} from './styles';


class Pesquisa extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    fetchRequest: PropTypes.func.isRequired,
    addToCartRequest: PropTypes.func.isRequired,
    fetchSearchRequest: PropTypes.func.isRequired,
    produtos: PropTypes.shape({
      isFetching: PropTypes.bool
    }).isRequired
  };

  state = {
    pesquisa: "",
    mensagem: ""
  };
  
  componentDidMount() {
    
  }

  loadProducts = () => {
    const { fetchSearchRequest } = this.props;
    const searchTerm = this.state.pesquisa || "";
    if (searchTerm.length > 3) {
        fetchSearchRequest({produto: searchTerm});
        this.setState({ mensagem: "Nenhum produto encontrado" });
    } else {
      this.setState({ mensagem: "" });
    }
  }


 handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  }

  onChangeText = term => {
   this.setState({pesquisa: term});
   this.loadProducts();
  };



  render() {
    const {fetchingSearch, amount} = this.props
    const resultado = this.props.produtos.search;
    return (
    <Container>
        <SearchBarContainer>
            <SearchIcon name="search" size={18} />
            <SearchText
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              clearTextOnFocus
              placeholder="Buscar produtos"
              onChangeText={value => this.onChangeText(value)}
            />
        </SearchBarContainer>
        {(this.state.mensagem != "" && this.props.produtos.search.length == 0) && (
        <SearchBarMessage>{this.state.mensagem}</SearchBarMessage>
        
        )}
        
      <List
        data={resultado}
        keyExtractor={product => String(product.id)}
        refreshing={fetchingSearch}
        onRefresh={this.loadProducts}
        renderItem={({ item: product }) => (
          <ListProduct>
            <ListProductImage source={{ uri: product.image }} />
            <ListProductTitle>{product.title}</ListProductTitle>
            <ListProductPrice>{product.priceFormatted}</ListProductPrice>
            <ListProductButton onPress={() => this.handleAddProduct(product.id)}>
              <ListProductButtonCart>
                {product.loading ? (
                  <ActivityIndicator color="#FFF" size={16} />
                ) : (
                  <>
                    <Icon name="shopping-basket" size={16} color="#fff" />
                    <ListProductButtonCartText>
                      {amount[product.id] || 0}
                    </ListProductButtonCartText>
                  </>
                )}
              </ListProductButtonCart>
              <ListProductButtonText>Adicionar</ListProductButtonText>
            </ListProductButton>
          </ListProduct>
        )}
      />
    </Container>
    )
  };
}


const mapStateToProps = state => ({
  carrinho: state.carrinho,
  produtos: state.produtos,
  fetching: state.produtos.isFetching,
  fetchingSearch: state.produtos.isFetchingSearch,
  amount:  state.carrinho.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...ProdutosActions, ...CarrinhoActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pesquisa);