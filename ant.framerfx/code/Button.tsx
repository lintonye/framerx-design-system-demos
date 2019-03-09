import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Button as _Button } from "antd";
import { FramerXWrapper } from "./FramerXWrapper";
import "antd/dist/antd.less";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = { label: string };

export class Button extends React.Component<Props> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    const { label, ...rest } = this.props;
    return (
      <FramerXWrapper>
        <_Button {...rest}>{label}</_Button>
      </FramerXWrapper>
    );
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    label: "Hello World!"
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    label: { type: ControlType.String, title: "Label" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["default", "primary", "ghost", "dashed", "danger"]
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
