import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Replace with your primary color
    },
    secondary: {
      main: "#81C784", // Replace with your secondary color
    },
    background: {
      default: "#303030", // Replace with your background color
    },
    text: {
      primary: "#212121", // Replace with your text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Change this to your preferred font
  },
});

export default theme;
