import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import navigationTheme from "./src/utils/themes/navigationTheme";
import paperTheme from "./src/utils/themes/paperTheme";

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navigationTheme}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
