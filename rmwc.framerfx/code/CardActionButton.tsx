import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { CardActionButton as _CardActionButton } from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { iconPropertyControls, processIconProps } from "./framerx-integration";
import FramerXWrapper from "./FramerXWrapper";

export function CardActionButton(props) {
  const { label, ...rest } = processIconProps(props);
  return (
    <FramerXWrapper>
      <_CardActionButton {...rest}>{label}</_CardActionButton>
    </FramerXWrapper>
  );
}

_CardActionButton.displayName = "CardActionButton";

const propertyControls: PropertyControls = {
  outlined: {
    type: ControlType.Boolean,
    title: "Outlined"
  },
  label: {
    type: ControlType.String,
    title: "Label"
  },
  ...iconPropertyControls()
};

CardActionButton.propertyControls = propertyControls;

CardActionButton.defaultProps = {
  label: "Action"
};
