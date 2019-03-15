import * as React from "react";

type Props = {
  type: "red" | "blue";
  label: string;
};

export function Button(props: Props) {
  return <button style={{ color: props.type }}>{props.label}</button>;
}
