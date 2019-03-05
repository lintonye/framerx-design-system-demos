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
import { isCanvas, cloneFrameless, makeFrameRelative } from "./framerx-utils";

export function Dialog(props) {
  const { title, content, actions, width, height, ...rest } = processIconProps(
    props
  );
  return isCanvas() ? (
    <div
      style={{
        backgroundColor: "rgba(100,200,200,0.3)",
        pointerEvents: "none"
      }}
    >
      Dialog: {title}
    </div>
  ) : (
    <_Dialog {...rest}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{cloneFrameless(content)}</DialogContent>
      <DialogActions>{cloneFrameless(actions)}</DialogActions>
    </_Dialog>
  );
}

const propertyControls: PropertyControls = {
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

Dialog.propertyControls = propertyControls;

Dialog.defaultProps = {
  open: false
};
