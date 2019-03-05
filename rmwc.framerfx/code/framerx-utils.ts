import * as React from "react";
import { RenderTarget } from "framer";

function isFrameyElement(element) {
  if (element.type) {
    const { name } = element.type;
    return (
      ["WithEventsHOC", "ComponentContainer", "withOverride", "Frame"].indexOf(
        name
      ) >= 0
    );
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

function getOverrideProps(element) {
  let rendered = element.type(element.props);
  const container = rendered.props.children();
  const { children, ...containerProps } = container.props;
  return containerProps;
}

function cloneOne(element, props?) {
  if (isFrameyElement(element)) {
    let props = undefined;
    if (element.type.name === "ComponentContainer") {
      const { width, height } = element.props;
      props = { parentSize: { width, height } };
    }
    if (element.type.name === "withOverride") {
      props = getOverrideProps(element);
    }
    return cloneFrameless(element.props.children, props);
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
          { ...props, ...element.props },
          newChildren
        )
      ];
    } else return [React.cloneElement(element)];
  }
}

export function cloneFrameless(children, props?) {
  if (Array.isArray(children)) {
    return flatten(children.map(c => cloneOne(c, props)));
  } else return cloneOne(children, props);
}

export function makeFrameRelative(children) {
  const makeRelative = e =>
    React.cloneElement(e, { style: { position: "relative" } });
  return React.Children.map(children, makeRelative);
}

export function isCanvas() {
  return RenderTarget.current() === RenderTarget.canvas;
}
