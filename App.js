import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import GlobalProvider from "./src/contexts/Provider";
import RootNavigator from "./src/routes/RootNavigator";

export default function App() {
  return (
    <GlobalProvider>
      <StatusBar backgroundColor="#FF6347" style="light" />
      <RootNavigator />
    </GlobalProvider>
  );
}
