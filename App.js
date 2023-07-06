import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import colors from "./src/utils/constants/colors";

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.medium_1_color,
    background: colors.bg_1_color,
    card: colors.bg_2_color,
    text: colors.font_light_1_color,
    border: colors.light_2_color,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
