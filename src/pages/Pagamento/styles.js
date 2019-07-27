import styled from "styled-components/native";

export const Container = styled.View`
  background: #191920;
  padding: 20px;
  flex: 1;
`;

export const MeioPagamento = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  background-color: #FFFFFF;
`;

export const Imagem = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

export const Texto = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerPagamentos = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20;
`;

export const Text = styled.Text`
  color:#FFFFFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#FFFFFF"
});
