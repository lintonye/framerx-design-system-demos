import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { CardActionIcon as _CardActionIcon } from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { iconPropertyControls, processIconProps } from "./framerx-integration";
import FramerXWrapper from "./FramerXWrapper";

export function CardActionIcon(props) {
  const { ...rest } = processIconProps(props);
  return (
    <FramerXWrapper>
      <_CardActionIcon {...rest}>{}</_CardActionIcon>
    </FramerXWrapper>
  );
}

const propertyControls: PropertyControls = {
  checked: {
    type: ControlType.Boolean,
    title: "Checked"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  },
  ...iconPropertyControls()
};

CardActionIcon.propertyControls = propertyControls;

CardActionIcon.defaultProps = {
  checked: false,
  disabled: false
};
