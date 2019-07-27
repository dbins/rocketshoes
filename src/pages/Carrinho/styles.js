import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  padding: 20px;
  flex: 1;
`;

export const List = styled.FlatList`
  background: #fff;
  border-radius: 4px;
  flex-grow: 0;
  padding: 0 20px;
`;

export const Product = styled.View`
  height: 130px;
  padding-bottom: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfoImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfoDetail = styled.View`
  padding-left: 10px;
  flex: 1;
  flex-direction: column;
`;

export const ProductInfoDetailTitle = styled.Text`
  color: #333333;
  font-size: 14px;
`;

export const ProductInfoDetailPrice = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductInfoRemoveButton = styled.TouchableOpacity``;

export const ProductTotal = styled.View`
  background: #eee;
  border-radius: 4px;
  padding: 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTotalAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductTotalAmountInfo = styled.Text`
  color: #000000;
  font-size: 14px;
`;

export const ProductTotalPrice = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductTotalAmountDecrement = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const ProductTotalAmountIncrement = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const FooterLabel = styled.Text`
  color: #999999;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FooterPrice = styled.Text`
  color: #000000;
  font-size: 30px;
  font-weight: bold;
`;

export const FooterButton = styled.TouchableOpacity`
  background: #7159c1;
  width: 100%;
  align-items: center;
  padding: 13px 0;
  border-radius: 4px;
  margin: 10px 0;
`;

export const FooterButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EmptyCart = styled.View`
  background: #fff;
  border-radius: 4px;
  flex-grow: 0;
  align-items: center;
  padding: 20px;
`;

export const EmptyCartText = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;

export const EmptyCartButton = styled.TouchableOpacity`
  background: #7159c1;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
`;

export const EmptyCartButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
