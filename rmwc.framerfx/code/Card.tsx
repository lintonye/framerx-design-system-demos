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

const filterById = keyword => element =>
  element.props.id && element.props.id.indexOf(keyword) > 0;

export function Card(props) {
  const { primaryActions, actions, ...rest } = props;
  return (
    <_Card {...rest}>
      {primaryActions.map((a, idx) => {
        const actionItems = cloneFrameless(a);
        const medias = actionItems.filter(filterById("CardMedia"));
        const otherItems = actionItems.filter(i => !filterById("CardMedia")(i));
        return (
          <CardPrimaryAction key={"primaryAction" + idx}>
            {medias}
            <div style={{ padding: "1rem" }}>{otherItems}</div>
          </CardPrimaryAction>
        );
      })}
      {actions.map((a, idx) => {
        const actionItems = cloneFrameless(a);
        const actionButtons = actionItems.filter(
          filterById("CardActionButton")
        );
        const actionIcons = actionItems.filter(filterById("CardActionIcon"));
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
