import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoButton = styled.TouchableOpacity``;

export const LogoImage = styled.Image``;

export const ShoppingBasket = styled.TouchableOpacity`
  position: relative;
`;

export const SearchIcon = styled.TouchableOpacity`
  position: relative;
`;

export const ShoppingBaskterBadge = styled.View`
  background: #7159c1;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -5px;
`;

export const ShoppingBaskterBadgeText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
