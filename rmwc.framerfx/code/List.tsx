import * as React from "react"
import { useState, useEffect } from "react"
import "@material/list/dist/mdc.list.css"
import "@rmwc/list/collapsible-list.css"
import { List as _List, CollapsibleList, SimpleListItem } from "@rmwc/list"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils"
import FramerXWrapper from "./FramerXWrapper"
import { addPropertyControls, ControlType } from "framer"

async function readItemsFromJson(jsonUrl) {
  const jsonResponse = await fetch(jsonUrl)
  const items = await jsonResponse.json()

  return items.map(({ title, graphic }, idx) => (
    <SimpleListItem text={title} graphic={graphic} key={idx} />
  ))
}

export function List({ children, collapsible, itemsJsonUrl, ...rest }) {
  const clonedChildren = cloneFrameless(children)
  const [listItems, setListItems] = useState(clonedChildren)
  const [firstItem, ...restItems] = listItems

  const ListComp = collapsible ? CollapsibleList : _List
  const props = collapsible ? { handle: firstItem, ...rest } : rest
  useEffect(() => {
    if (itemsJsonUrl) {
      async function loadJson() {
        const items = await readItemsFromJson(itemsJsonUrl)
        setListItems(items)
      }
      loadJson()
    }
  }, [itemsJsonUrl])
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
  },
  itemsJsonUrl: {
    type: ControlType.File,
    allowedFileTypes: ["json"]
  }
})
