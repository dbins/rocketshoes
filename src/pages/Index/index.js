import React, { Component, useEffect, useCallback } from "react";
import { Dimensions, Image, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ActivityIndicator } from "react-native";

import { Creators as CarrinhoActions } from "../../store/ducks/carrinho";
import { Creators as ProdutosActions } from "../../store/ducks/produtos";
import Carousel from "react-native-banner-carousel";

const BannerWidth = Dimensions.get("window").width - 10;
const BannerHeight = 142;
const BannerHeight2 = 47;

const images = [
  require("../../assets/banner1.jpg"),
  require("../../assets/banner2.jpg"),
  require("../../assets/banner3.jpg")
];

const marcas = [
  require("../../assets/marcas1.png"),
  require("../../assets/marcas2.png"),
  require("../../assets/marcas3.png")
];

import {
  Container,
  Conteudo,
  Imagem,
  Info,
  TextoBotao,
  BotaoMeio,
  Container2,
  Container3,
  Destaque,
  Entrega
} from "./styles";

class Index extends Component {
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={image}
        />
      </View>
    );
  }

  renderPage2(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight2 }}
          source={image}
        />
      </View>
    );
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Conteudo>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
          >
            {images.map((image, index) => this.renderPage(image, index))}
          </Carousel>

          <Container2>
            <BotaoMeio
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Imagem source={require("../../assets/cup.png")} />
              <Info>
                <TextoBotao>Mais vendidos</TextoBotao>
              </Info>
            </BotaoMeio>
            <BotaoMeio
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Imagem source={require("../../assets/giftbox.png")} />
              <Info>
                <TextoBotao>Lançamentos</TextoBotao>
              </Info>
            </BotaoMeio>
          </Container2>
          <Container2>
            <BotaoMeio
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Imagem source={require("../../assets/shopping-store.png")} />
              <Info>
                <TextoBotao>Produtos com desconto</TextoBotao>
              </Info>
            </BotaoMeio>
            <BotaoMeio
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Imagem source={require("../../assets/account.png")} />
              <Info>
                <TextoBotao>Meus Dados</TextoBotao>
              </Info>
            </BotaoMeio>
          </Container2>
          <Container2>
            <Carousel
              autoplay
              autoplayTimeout={3000}
              loop
              index={0}
              showsPageIndicator={false}
              pageSize={BannerWidth}
            >
              {marcas.map((image, index) => this.renderPage2(image, index))}
            </Carousel>
          </Container2>
          <Container2>
            <Entrega source={require("../../assets/destaques.png")} />
          </Container2>
        </Conteudo>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  carrinho: state.carrinho,
  produtos: state.produtos,
  fetching: state.produtos.isFetching,
  amount: state.carrinho.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProdutosActions, ...CarrinhoActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
