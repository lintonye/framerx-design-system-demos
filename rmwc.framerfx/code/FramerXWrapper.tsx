import * as React from "react";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import theme from "./theme";
import Helmet from "react-helmet";

export default function FramerXWrapper({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider options={theme.options}>{children}</ThemeProvider>
    </>
  );
}
