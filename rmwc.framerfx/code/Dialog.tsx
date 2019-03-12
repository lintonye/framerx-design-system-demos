import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import {
  Dialog as _Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@rmwc/dialog";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
import { iconPropertyControls, processIconProps } from "./framerx-integration";
import {
  isCanvas,
  cloneFrameless,
  makeFrameRelative
} from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

export class Dialog extends React.Component {
  render() {
    const {
      title,
      content,
      actions,
      width,
      height,
      ...rest
    } = processIconProps(this.props);

    return isCanvas() ? (
      <div
        style={{
          backgroundColor: "rgba(100,200,200,0.3)",
          height: "100%"
        }}
      >
        Dialog: {title}
        {cloneFrameless(content)}
        {cloneFrameless(actions)}
      </div>
    ) : (
      <_Dialog {...rest} ref={r => (this.dialog = r)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{cloneFrameless(content)}</DialogContent>
        <DialogActions>{cloneFrameless(actions)}</DialogActions>
      </_Dialog>
    );
  }

  findParentFrameDiv = () => {
    if (this.dialog) {
      this.frameDiv = this.dialog.container.parentNode.parentNode;
    }
  };

  // This is a hack to make the dialog and its scrim to
  // go outside of the parent div that Framer X adds to
  // every component instance.
  updateParentFrameDiv = ({ open, width, height }) => {
    if (!isCanvas()) {
      this.frameDiv.style = `display: ${
        open ? "block" : "none"
      }; height: 100vh;`;
    }
  };

  componentDidMount = () => {
    this.findParentFrameDiv();
    this.updateParentFrameDiv(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.open !== this.props.open) {
      this.updateParentFrameDiv(this.props);
    }
  };

  static propertyControls: PropertyControls = {
    title: {
      type: ControlType.String,
      title: "Title"
    },
    content: {
      type: ControlType.ComponentInstance,
      title: "Content"
    },
    actions: {
      type: ControlType.ComponentInstance,
      title: "Actions"
    }
  };

  static defaultProps = {
    open: false
  };
}
