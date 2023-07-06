import { DefaultTheme } from "@react-navigation/native";
import colors from "../constants/colors";

export default {
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
