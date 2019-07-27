import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CarrinhoActions } from '../../store/ducks/carrinho';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Navigation from '../../services/navigation';

import {
  Container,
  LogoButton,
  LogoImage,
  ShoppingBasket,
  ShoppingBaskterBadge,
  ShoppingBaskterBadgeText,
  SearchIcon
} from './styles';

import logo from '../../assets/logo.png';

class Header extends Component  {

  render() {
      return (
      <Container>
        <LogoButton onPress={() => Navigation.navigate('Home')}>
          <LogoImage source={logo} />
        </LogoButton>

        
        <SearchIcon onPress={() => Navigation.navigate('Pesquisa')}>
          <Icon name="search" size={30} color="#fff" />
        </SearchIcon>
        <ShoppingBasket onPress={() => Navigation.navigate('Carrinho')}>
        
          <Icon name="shopping-basket" size={30} color="#fff" />

          <ShoppingBaskterBadge>
            <ShoppingBaskterBadgeText>{this.props.carrinho.length}</ShoppingBaskterBadgeText>
          </ShoppingBaskterBadge>
        </ShoppingBasket>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  carrinho: state.carrinho
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CarrinhoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);