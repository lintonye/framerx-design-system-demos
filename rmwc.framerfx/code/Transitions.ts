import { Override, Data } from "framer";

const data = Data({
  cardLeft: 150,
  cardTop: 150,
  cardWidth: 398,
  cardHeight: 405,
  actionsOpacity: 1
});

export function Card(props): Override {
  return {
    animate: {
      left: data.cardLeft,
      top: data.cardTop,
      width: data.cardWidth,
      height: data.cardHeight
    },
    onTap: () => {
      data.cardLeft = 0;
      data.cardTop = 0;
      data.actionsOpacity = 0;
      data.cardWidth = 600;
      data.cardHeight = 800;
    }
  };
}

export function Actions(props): Override {
  // const {
  //   constraints: { width, height }
  // } = props;
  // data.cardWidth = width;
  // data.cardHeight = height;
  // console.log(width, height);
  return {
    animate: { opacity: data.actionsOpacity }
  };
}
