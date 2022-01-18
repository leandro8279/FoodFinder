import AsyncStorage from "@react-native-async-storage/async-storage";

export async function signIn(foundUser, dispatch, navigation) {
  const userToken = String(foundUser[0].userToken);
  const userName = foundUser[0].username;
  try {
    await AsyncStorage.setItem("userToken", userToken);
  } catch (e) {
    console.log(e);
  }
  dispatch({ type: "LOGIN", payload: { id: userName, token: userToken } });
}

export async function signOut(dispatch) {
  try {
    await AsyncStorage.removeItem("userToken");
  } catch (e) {
    console.log(e);
  }
  dispatch({ type: "LOGOUT" });
}
