import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import _Button, { themeNamespace } from "@atlaskit/button";
import FramerXWrapper from "./FramerXWrapper";

type Props = { text: string };

export class Button extends React.Component<Props> {
  render() {
    const { text, ...props } = this.props;
    return (
      <FramerXWrapper themeNamespace={themeNamespace}>
        <_Button {...props} appearance="primary">
          {text}
        </_Button>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    text: "Hello World!",
    width: 89,
    height: 26
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" }
  };
}
