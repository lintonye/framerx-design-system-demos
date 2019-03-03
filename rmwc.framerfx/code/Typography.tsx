import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/typography/dist/mdc.typography.css";
import { Typography as _Typography, TypographyT } from "@rmwc/typography";
import FramerXWrapper from "./FramerXWrapper";
import { themePropertyControls } from "./framerx-integration";

type Props = { text: string; variant: TypographyT };

export class Typography extends React.Component<Props> {
  render() {
    const { text, variant, ...rest } = this.props;
    return (
      <FramerXWrapper>
        <_Typography use={variant} {...rest}>
          {text}
        </_Typography>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    variant: "body1",
    text: "Hello world"
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    variant: {
      type: ControlType.Enum,
      title: "variant",
      options: [
        "headline1",
        "headline2",
        "headline3",
        "headline4",
        "headline5",
        "headline6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline"
      ]
    },
    ...themePropertyControls("typography")
  };
}
