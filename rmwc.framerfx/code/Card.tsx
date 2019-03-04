import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import {
  Card as _Card,
  CardPrimaryAction,
  CardMedia,
  CardActionButton,
  CardActionIcon,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { cloneFrameless } from "./framerx-utils";

export function Card(props) {
  const { primaryActions, actions, ...rest } = props;
  return (
    <_Card {...rest}>
      {primaryActions.map((a, idx) => (
        <CardPrimaryAction key={"primaryAction" + idx}>
          <div style={{ padding: "1rem" }}>{cloneFrameless(a)}</div>
        </CardPrimaryAction>
      ))}
      {actions.map((a, idx) => {
        const actionItems = cloneFrameless(a);
        const filter = keyword => element =>
          element.props.id.indexOf(keyword) > 0;
        const actionButtons = actionItems.filter(filter("CardActionButton"));
        const actionIcons = actionItems.filter(filter("CardActionIcon"));
        return (
          <CardActions key={"action" + idx}>
            {actionButtons.length > 0 && (
              <CardActionButtons>{actionButtons}</CardActionButtons>
            )}
            {actionIcons.length > 0 && (
              <CardActionIcons>{actionIcons}</CardActionIcons>
            )}
          </CardActions>
        );
      })}
    </_Card>
  );
}

const propertyControls: PropertyControls = {
  outlined: {
    type: ControlType.Boolean,
    title: "Outlined"
  },
  primaryActions: {
    type: ControlType.Array,
    title: "Primary Actions",
    propertyControl: {
      type: ControlType.ComponentInstance
    }
  },
  actions: {
    type: ControlType.Array,
    title: "Actions",
    propertyControl: {
      type: ControlType.ComponentInstance
    }
  }
};

Card.propertyControls = propertyControls;
