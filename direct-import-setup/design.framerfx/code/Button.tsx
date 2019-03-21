import * as React from "react";
import { Button as _Button } from "../../ds/src/Button";

export function Button({ label }) {
  return <_Button label={label}>{}</_Button>;
}

Button.defaultProps = {
  label: "Button text"
};
