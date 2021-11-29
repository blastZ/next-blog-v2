import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#4db6ac",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "sans-serif",
    ].join(","),
  },
});

export default responsiveFontSizes(theme);
