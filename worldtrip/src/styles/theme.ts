import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#ffba08",
    },
    gray: {
      "600": "#0D3C5C",
      "300": "#829099",
      "100": "#CEE4F2",
      "50": "#F7F9FA",
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
        bg: "white",
        color: "gray.600",
      },
    },
  },
});
