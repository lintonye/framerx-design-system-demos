import { Override, Data } from "framer";

// Override Docs: https://framer.com/docs/overrides

const SCREEN_WIDTH = 700;
const SCREEN_HEIGHT = 1152;

const data = Data({
  actionsOpacity: 1,
  cardWidth: 100,
  cardHeight: 100,
  cardLeft: 100,
  cardTop: 100,
  imageWidth: 100,
  imageHeight: 100
});

function animateTransition() {
  data.imageWidth = SCREEN_WIDTH;
  data.imageHeight = Math.round((SCREEN_WIDTH * 9) / 16);
  data.cardLeft = 0;
  data.cardTop = 0;
  data.cardWidth = SCREEN_WIDTH;
  data.cardHeight = SCREEN_HEIGHT;
  data.actionsOpacity = 0;
  console.log("animate", data);
}

export function Image(props): Override {
  data.imageWidth = props.constraints.width;
  data.imageHeight = props.constraints.height;
  return {
    animate: { width: data.imageWidth, height: data.imageHeight },
    onTap: () => {
      animateTransition();
    }
  };
}

export function Card(props): Override {
  data.cardLeft = props.constraints.left;
  data.cardTop = props.constraints.top;
  data.cardWidth = props.constraints.width;
  data.cardHeight = props.constraints.height;

  return {
    animate: {
      left: data.cardLeft,
      top: data.cardTop,
      width: data.cardWidth,
      height: data.cardHeight
    }
  };
}

export function Actions(props): Override {
  return {
    animate: { opacity: data.actionsOpacity }
  };
}
