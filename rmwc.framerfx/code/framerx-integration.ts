import { PropertyControls, ControlType } from "framer";
import theme from "./theme";
import * as Canvas from "./canvas";
import { iconNames, getIconElement } from "./icons";

export const iconPropertyControls = (): PropertyControls => ({
  icon: {
    type: ControlType.Enum,
    title: "Icon",
    options: ["< none >", "< BuiltIn >", ...iconNames]
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
