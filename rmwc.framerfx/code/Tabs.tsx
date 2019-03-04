import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import { TabBar, Tab } from "@rmwc/tabs";
import FramerXWrapper from "./FramerXWrapper";
import { cloneFrameless } from "./framerx-utils";

type Props = {
  tabs: string[];
  externalTabs: React.ReactNode;
  activeTabIndex: number;
};

const isNonEmptyArray = a => Array.isArray(a) && a.length > 0;

export class Tabs extends React.Component<Props> {
  render() {
    const { tabs, externalTabs, ...rest } = this.props;

    let tabElements;
    if (isNonEmptyArray(externalTabs)) {
      tabElements = cloneFrameless(externalTabs);
    } else {
      tabElements = tabs.map((tab, idx) => <Tab key={idx}>{tab}</Tab>);
    }
    return (
      <FramerXWrapper>
        <TabBar {...rest}>{tabElements}</TabBar>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    tabs: ["Fruits", "Drinks", "Meats"],
    activeTabIndex: 0
  };

  static propertyControls: PropertyControls<Props> = {
    tabs: {
      type: ControlType.Array,
      title: "Tabs",
      propertyControl: { type: ControlType.String },
      hidden: ({ externalTabs }) => isNonEmptyArray(externalTabs)
    },
    externalTabs: {
      type: ControlType.ComponentInstance,
      title: "Tabs"
    },
    activeTabIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  };
}
