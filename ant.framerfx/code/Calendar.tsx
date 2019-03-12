import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Calendar as _Calendar } from "antd";
import { FramerXWrapper } from "./FramerXWrapper";

type Props = { label: string; type: string };

export class Calendar extends React.Component<Props> {
  render() {
    const { label, ...rest } = this.props;
    return (
      <FramerXWrapper>
        <_Calendar {...rest}>{label}</_Calendar>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    label: "Hello World!"
  };

  static propertyControls: PropertyControls<Props> = {
    label: { type: ControlType.String, title: "Label" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["default", "primary", "ghost", "dashed", "danger"]
    }
  };
}
