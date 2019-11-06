import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { darken } from "polished";
var width = Dimensions.get("window").width; //full width
var width2 = width / 2 - 20;
var width3 = width * 0.95;

export const Container = styled.ScrollView`
  background: #191920;
  flex: 1;
`;

export const Conteudo = styled.ScrollView`
  padding: 10px 10px 10px;
`;

export const Info = styled.View`
  height: 70px;
  flex: 1;
`;

export const Imagem = styled.Image`
  width: 32px;
  height: 32px;
  margin: 5px;
`;

export const Destaque = styled.Image`
  width: ${width3};
  height: 420px;
  margin: 5px;
`;

export const Entrega = styled.Image`
  width: 380px;
  height: 76px;
  margin: 0px;
`;

export const TextoBotao = styled.Text`
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 5px;
  font-size: 16px;
  color: #ffffff;
`;

export const BotaoMeio = styled.TouchableOpacity`
  width: ${width2};
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000000;
  margin-left: 5px;
`;

export const Container2 = styled.View`
  flex: 1;
  padding: 0px;
  flex-direction: row;
  align-items: center;
  width: ${width};
  height: 65px;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Container3 = styled.View`
  flex: 1;
  padding: 0px;
  flex-direction: row;
  align-items: center;
  width: ${width};
  height: 420px;
  margin-bottom: 5px;
  margin-top: 5px;
`;
