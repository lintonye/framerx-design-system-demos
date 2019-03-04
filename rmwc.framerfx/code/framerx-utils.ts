import * as React from "react";

function isFrameyElement(element) {
  if (element.type) {
    const { name } = element.type;
    return ["WithEventsHOC", "ComponentContainer", "Frame"].indexOf(name) >= 0;
  } else return false;
}

function flatten(arr) {
  const flattened = arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
  return flattened;
}

function cloneOne(element, parentSize?) {
  if (isFrameyElement(element)) {
    let parentSize = undefined;
    if (element.type.name === "ComponentContainer") {
      const { width, height } = element.props;
      parentSize = { width, height };
    }
    return cloneFrameless(element.props.children, parentSize);
  } else {
    if (Array.isArray(element.props.children)) {
      const newChildren = flatten(
        element.props.children.map(c => cloneOne(c))
      ).filter(e => e !== null && typeof e !== "undefined");
      // must use createElement instead of cloneElement here or else
      // the parentSize won't be used to create width/height props
      return [
        React.createElement(
          element.type,
          { parentSize, ...element.props },
          newChildren
        )
      ];
    } else return [React.cloneElement(element)];
  }
}

export function cloneFrameless(children, parentSize?) {
  if (Array.isArray(children)) {
    return flatten(children.map(c => cloneOne(c, parentSize)));
  } else return cloneOne(children, parentSize);
}

export function makeFrameRelative(children) {
  const makeRelative = e =>
    React.cloneElement(e, { style: { position: "relative" } });
  return React.Children.map(children, makeRelative);
}
