import { createTheme } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});
export const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      //   default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Roboto",
    allVariants: {
      color: "#333333",
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
  },
});
