import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#ffba08",
    },
    gray: {
      "600": "#47585B",
      "300": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "yellow",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
