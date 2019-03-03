import * as React from "react";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import theme from "./theme";

export default function FramerXWrapper({ children }) {
  return <ThemeProvider options={theme}>{children}</ThemeProvider>;
}
