import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

type Props = {
  themeNamespace: string;
};

export default class FramerXWrapper extends React.Component<Props> {
  render() {
    const { themeNamespace } = this.props;
    return (
      <ThemeProvider theme={{ [themeNamespace]: theme[themeNamespace] }}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
