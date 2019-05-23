import * as React from "react"
import "@material/list/dist/mdc.list.css"
import "@rmwc/list/collapsible-list.css"
import { List as _List, CollapsibleList } from "@rmwc/list"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils"
import FramerXWrapper from "./FramerXWrapper"
import { addPropertyControls, ControlType } from "framer"

export function List({ children, collapsible, ...rest }) {
  const listItems = cloneFrameless(children)
  const [firstItem, ...restItems] = listItems
  const ListComp = collapsible ? CollapsibleList : _List
  const props = collapsible ? { handle: firstItem, ...rest } : rest
  return (
    <FramerXWrapper>
      <ListComp {...props}>{collapsible ? restItems : listItems}</ListComp>
    </FramerXWrapper>
  )
}

addPropertyControls(List, {
  collapsible: {
    type: ControlType.Boolean,
    defaultValue: false
  }
})
