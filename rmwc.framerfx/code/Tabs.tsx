import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import { TabBar, Tab } from "@rmwc/tabs";
import FramerXWrapper from "./FramerXWrapper";

type Props = { tabs: string[] };

export class Tabs extends React.Component<Props> {
  render() {
    const { tabs } = this.props;
    return (
      <FramerXWrapper>
        <TabBar>
          {tabs.map((tab, idx) => (
            <Tab key={idx}>{tab}</Tab>
          ))}
        </TabBar>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    tabs: ["Fruits", "Drinks", "Meats"]
  };

  static propertyControls: PropertyControls<Props> = {
    tabs: {
      type: ControlType.Array,
      title: "Tabs",
      propertyControl: { type: ControlType.String }
    }
  };
}
