import { PropertyControls, ControlType } from "framer";
import theme from "./theme";
import { iconNames, getIconElement } from "./icons";

export const iconPropertyControls = (): PropertyControls => ({
  icon: {
    type: ControlType.Enum,
    title: "Icon",
    options: ["< none >", "< Material >", ...iconNames]
  },
  builtInIcon: {
    type: ControlType.String,
    title: "Icon name",
    hidden: ({ icon }) => icon === "< none >" || iconNames.indexOf(icon) >= 0
  }
});

export const processIconProps = props => {
  const { icon: oldIcon, builtInIcon, ...rest } = props;
  if (oldIcon === "< none >") {
    return rest;
  } else {
    const icon = getIconElement(oldIcon) || builtInIcon;
    return { icon, ...rest };
  }
};

function getOptions(compName) {
  const key = compName + "Themes";
  const value = theme[key];
  if (Array.isArray(value)) {
    return { options: value };
  } else {
    const optionTitles = Object.keys(value);
    return {
      optionTitles,
      options: optionTitles.map(k => value[k].join(" "))
    };
  }
}

export const themePropertyControls = (type): PropertyControls => {
  return {
    theme: {
      type: ControlType.Enum,
      title: "Theme",
      ...getOptions(type)
    }
  };
};

export const spacingPropertyControls = (): PropertyControls => ({
  p: {
    type: ControlType.FusedNumber,
    title: "Padding",
    toggleKey: "isPaddingPerSide",
    toggleTitles: ["All Sides", "Per Side"],
    valueKeys: ["pt", "pl", "pr", "pb"],
    valueLabels: ["T", "L", "R", "B"]
  },
  m: {
    type: ControlType.FusedNumber,
    title: "Margin",
    toggleKey: "isMarginPerSide",
    toggleTitles: ["All Sides", "Per Side"],
    valueKeys: ["mt", "ml", "mr", "mb"],
    valueLabels: ["T", "L", "R", "B"]
  }
});

export function processSpacingProps(props) {
  const {
    isPaddingPerSide,
    p,
    pt,
    pl,
    pr,
    pb,
    isMarginPerSide,
    m,
    mt,
    ml,
    mr,
    mb,
    ...rest
  } = props;
  const v = (t, r, b, l) => [t, r, b, l].map(s => `${s || 0}rem`).join(" ");
  const padding =
    typeof isPaddingPerSide === "undefined"
      ? undefined
      : isPaddingPerSide
      ? v(pt, pr, pb, pl)
      : v(p, p, p, p);
  const margin =
    typeof isMarginPerSide === "undefined"
      ? undefined
      : isMarginPerSide
      ? v(mt, mr, mb, ml)
      : v(m, m, m, m);
  const style = { padding, margin };

  return { style, ...rest };
}
