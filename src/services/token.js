import { AsyncStorage } from "react-native";
export const TOKEN_KEY = "@Rocketshoes:token";
export const OnLogin = token => AsyncStorage.setItem(TOKEN_KEY, token);
export const onLogout = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token !== null;
};
