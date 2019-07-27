import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const List = styled.FlatList`
  background: #191920;
  padding: 0 20px;
`;

export const ListProduct = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  flex-direction: column;
`;

export const ListProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ListProductTitle = styled.Text`
  color: #333333;
  font-size: 16px;
  padding-top: 10px;
`;

export const ListProductPrice = styled.Text`
  color: #000000;
  font-size: 21px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 15px;
`;

export const ListProductButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: row;
`;

export const ListProductButtonCart = styled.View`
  background: ${darken(0.1, '#7159c1')};
  height: 42px;
  padding: 0 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ListProductButtonCartText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-left: 5px;
`;

export const ListProductButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
`;
