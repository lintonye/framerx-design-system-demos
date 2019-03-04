import * as React from "react";
import { ControlType } from "framer";
import * as Canvas from "./canvas";

export type IconProp = { iconName?: string };

export const iconNames = Object.keys(Canvas).filter(n => n.startsWith("Icon_"));
export const iconDefaultProps = {
  width: 24,
  height: 24,
  iconName: iconNames[0]
};
export const iconPropertyControls = {
  iconName: {
    type: ControlType.Enum,
    title: "Icon",
    options: iconNames
  }
};

export function getIconElement(iconName: string, props = {}) {
  const IconComp = Canvas[iconName];
  const actualProps = Canvas[iconName]
    ? {
        ...props,
        style: {
          ...props.style,
          position: "relative",
          transform: "translate(0,0)"
        }
      }
    : props;
  return IconComp ? React.createElement(IconComp, actualProps) : null;
}
