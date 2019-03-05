import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { DialogButton as _DialogButton } from "@rmwc/dialog";
import "@material/button/dist/mdc.button.css";
import { iconPropertyControls, processIconProps } from "./framerx-integration";

export function DialogButton(props) {
  const { label, ...rest } = processIconProps(props);
  return <_DialogButton {...rest}>{label}</_DialogButton>;
}

const propertyControls: PropertyControls = {
  action: {
    type: ControlType.String,
    title: "Action"
  },
  label: {
    type: ControlType.String,
    title: "Label"
  },
  ...iconPropertyControls()
};

DialogButton.propertyControls = propertyControls;

DialogButton.defaultProps = {
  label: "Action"
};
