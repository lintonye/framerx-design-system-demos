import * as React from "react";
// import { Button as _Button } from "../lib";
import { Button as _Button } from "../lib/core.bundle.js";
import "../lib/css/blueprint.css";

export function Button() {
  return (
    <_Button intent="success" text="button content">
      Hello
    </_Button>
  );
}
