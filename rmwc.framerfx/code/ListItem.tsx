import * as React from "react"
import "@material/list/dist/mdc.list.css"
import "@rmwc/list/collapsible-list.css"
import { ListItem as _ListItem, SimpleListItem } from "@rmwc/list"
import FramerXWrapper from "./FramerXWrapper"
import { addPropertyControls, ControlType } from "framer"
import { iconPropertyControls, processIconProps } from "./framerx-integration"

export function ListItem({ ...rest }) {
  const ListComp = SimpleListItem
  const props = processIconProps(processIconProps(rest, "graphic"), "metaIcon")
  return (
    <FramerXWrapper>
      <ListComp {...props}>{null}</ListComp>
    </FramerXWrapper>
  )
}

ListItem.defaultProps = {
  height: 50
}

addPropertyControls(ListItem, {
  ...iconPropertyControls("graphic"),
  ...iconPropertyControls("metaIcon"),
  text: {
    type: ControlType.String,
    defaultValue: "list item"
  }
})
