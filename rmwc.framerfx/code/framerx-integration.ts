import { PropertyControls, ControlType } from "framer"
import theme from "./theme"
import { iconNames, getIconElement } from "./icons"

export const iconPropertyControls = (
  iconPropName = "icon",
  title = iconPropName
): PropertyControls => ({
  [iconPropName]: {
    type: ControlType.Enum,
    title,
    options: ["< none >", "< Material >", ...iconNames]
  },
  [`builtIn${iconPropName}`]: {
    type: ControlType.String,
    title: `${title} name`,
    hidden: props =>
      props[iconPropName] === "< none >" ||
      iconNames.indexOf(props[iconPropName]) >= 0
  }
})

function omit(o: Object, properties: string[]) {
  let result = {}
  Object.keys(o).forEach(key => {
    if (properties.indexOf(key) < 0) result[key] = o[key]
  })
  return result
}

export const processIconProps = (props, iconPropName = "icon") => {
  const oldIcon = props[iconPropName]
  const builtInIconKey = `builtIn${iconPropName}`
  const builtInIcon = props[builtInIconKey]
  const rest = omit(props, [iconPropName, builtInIconKey])
  if (oldIcon === "< none >") {
    return rest
  } else {
    const icon = getIconElement(oldIcon) || builtInIcon
    return { ...rest, [iconPropName]: icon }
  }
}

function getOptions(compName) {
  const key = compName + "Themes"
  const value = theme[key]
  if (Array.isArray(value)) {
    return { options: value }
  } else {
    const optionTitles = Object.keys(value)
    return {
      optionTitles,
      options: optionTitles.map(k => value[k].join(" "))
    }
  }
}

export const themePropertyControls = (type): PropertyControls => {
  return {
    theme: {
      type: ControlType.Enum,
      title: "Theme",
      ...getOptions(type)
    }
  }
}

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
})

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
  } = props
  const v = (t, r, b, l) => [t, r, b, l].map(s => `${s || 0}rem`).join(" ")
  const padding =
    typeof isPaddingPerSide === "undefined"
      ? undefined
      : isPaddingPerSide
      ? v(pt, pr, pb, pl)
      : v(p, p, p, p)
  const margin =
    typeof isMarginPerSide === "undefined"
      ? undefined
      : isMarginPerSide
      ? v(mt, mr, mb, ml)
      : v(m, m, m, m)
  const style = { padding, margin }

  return { style, ...rest }
}
