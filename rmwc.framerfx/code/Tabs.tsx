import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import { TabBar, Tab } from "@rmwc/tabs";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = { tabs: string[] };

export class Tabs extends React.Component<Props> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    const { tabs } = this.props;
    return (
      <TabBar>
        {tabs.map((tab, idx) => (
          <Tab key={idx}>{tab}</Tab>
        ))}
      </TabBar>
    );
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    tabs: ["Fruits", "Drinks", "Meats"]
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    tabs: {
      type: ControlType.Array,
      title: "Tabs",
      propertyControl: { type: ControlType.String }
    }
  };
}

// Define some standard CSS for your component
const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};
