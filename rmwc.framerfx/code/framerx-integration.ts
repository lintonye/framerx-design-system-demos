import { PropertyControls, ControlType } from "framer";
import theme from "./theme";

export const iconPropertyControls = (): PropertyControls => ({
  icon: { type: ControlType.String, title: "Icon" }
});

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
