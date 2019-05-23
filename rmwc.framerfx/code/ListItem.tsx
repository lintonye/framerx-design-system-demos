import * as React from "react"
import "@material/list/dist/mdc.list.css"
import "@rmwc/list/collapsible-list.css"
import {
  ListItem as _ListItem,
  SimpleListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta,
  ListItemText
} from "@rmwc/list"
import FramerXWrapper from "./FramerXWrapper"
import { addPropertyControls, ControlType } from "framer"
import { iconPropertyControls, processIconProps } from "./framerx-integration"

export function ListItem({ ...rest }) {
  const ListComp = SimpleListItem
  const props = processIconProps(processIconProps(rest, "graphic"), "metaIcon")
  return (
    <FramerXWrapper>
      {/* <ListComp {...props}>{null}</ListComp> */}
      {props.isSimple ? (
        <SimpleListItem {...props} />
      ) : (
        <_ListItem>
          <ListItemGraphic icon="star_border" />
          <ListItemText>
            <ListItemPrimaryText>Cookies</ListItemPrimaryText>
            <ListItemSecondaryText>$4.99 a dozen</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta icon="info" />
        </_ListItem>
      )}
    </FramerXWrapper>
  )
}

ListItem.defaultProps = {
  height: 50
}

addPropertyControls(ListItem, {
  ...iconPropertyControls("graphic"),
  ...iconPropertyControls("metaIcon"),
  isSimple: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  text: {
    type: ControlType.String,
    defaultValue: "list item"
  }
})
