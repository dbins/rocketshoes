import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #191920;
  padding: 10px;
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: column;
  width: 90%;
  margin-left: 10;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#000000"
})`
  background: #FFFFFF;
  border-radius: 5;
  letter-spacing: 0;
  padding: 0 10px;
  height: 55px;
  font-size: 16px;
  color: #000000;
  margin-top: 20;
`;

export const Observacao = styled(Input)`
  height: 160px;
  padding-top: 15;
`;

export const Endereco = styled.View`
  flex-direction: row;
`;
export const Rua = styled(Input)`
  width: 60%;
  margin-right: 20;
`;
export const Numero = styled(Input)`
  flex: 1;
`;



export const ButtonOrder = styled.TouchableOpacity`
  color: #000000;
  font-size: 20px;
  flex: 1;
  font-weight: bold;
  align-items: center;
  padding: 10px 0;
`;

export const ButtonContent = styled.Text`
  background: #7159c1;
  color:#FFFFFF;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#FFFFFF"
})``;

export const Error = styled.Text`
  color: #000000;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;
