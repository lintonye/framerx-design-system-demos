import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/button/dist/mdc.button.css";
import "@rmwc/icon/icon.css";
import { Button as _Button, ButtonIcon } from "@rmwc/button";
import FramerXWrapper from "./FramerXWrapper";

type Props = { label: string; icon: string; variant: string };

export class Button extends React.Component<Props> {
  render() {
    const { label, icon, variant } = this.props;
    return (
      <FramerXWrapper>
        <_Button label={label} icon={icon} {...{ [variant]: true }} />
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    label: "Button"
  };

  static propertyControls: PropertyControls<Props> = {
    label: { type: ControlType.String, title: "Label" },
    icon: { type: ControlType.String, title: "Icon" },
    variant: {
      type: ControlType.Enum,
      title: "variant",
      options: ["text", "raised", "outlined"]
    }
  };
}
