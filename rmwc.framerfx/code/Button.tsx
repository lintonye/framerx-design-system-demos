import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/button/dist/mdc.button.css";
import "@rmwc/icon/icon.css";
import { Button as _Button, ButtonIcon } from "@rmwc/button";
import FramerXWrapper from "./FramerXWrapper";
import {
  iconPropertyControls,
  themePropertyControls,
  processIconProps
} from "./framerx-integration";

type Props = { label: string; icon: string; variant: string };

export class Button extends React.Component<Props> {
  render() {
    const { variant, ...rest } = processIconProps(this.props);
    if (rest.disabled) {
      delete rest.theme;
    }
    return (
      <FramerXWrapper>
        <_Button {...rest} {...{ [variant]: true }} />
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    label: "Button"
  };

  static propertyControls: PropertyControls<Props> = {
    label: { type: ControlType.String, title: "Label" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    variant: {
      type: ControlType.Enum,
      title: "variant",
      options: ["text", "raised", "outlined"]
    },
    ...iconPropertyControls(),
    ...themePropertyControls("button")
  };
}
