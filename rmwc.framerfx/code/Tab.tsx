import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import { Tab as _Tab } from "@rmwc/tabs";
import { iconPropertyControls, processIconProps } from "./framerx-integration";

type Props = { label: string };

export class Tab extends React.Component<Props> {
  render() {
    const { label, ...rest } = processIconProps(this.props);
    return <_Tab {...rest}>{label}</_Tab>;
  }

  static defaultProps: Props = {
    label: "Tab1"
  };

  static propertyControls: PropertyControls<Props> = {
    label: {
      type: ControlType.String,
      title: "Label"
    },
    ...iconPropertyControls()
  };
}
