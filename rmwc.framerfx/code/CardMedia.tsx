import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { CardMedia as _CardMedia } from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

export function CardMedia(props) {
  const { size, imageUrl, ...rest } = props;
  return (
    <_CardMedia
      {...rest}
      {...{ [size]: true }}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      {}
    </_CardMedia>
  );
}

const propertyControls: PropertyControls = {
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["sixteenByNine", "square"],
    optionTitles: ["16x9", "square"]
  },
  imageUrl: {
    type: ControlType.Image,
    title: "Image"
  }
};

CardMedia.propertyControls = propertyControls;

CardMedia.defaultProps = {
  size: "sixteenByNine"
};
