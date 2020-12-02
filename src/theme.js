const commonTheme = {
  mobile: `only screen and (max-width: 420px)`
};

const lightColors = {
  primaryBackground: "#FFFFFF",
  secondaryBackground: "#F2F2F2",
  primary: "#F2CB05",
  primaryContrast: "#79C4F2",
  secondary: "#F2BF27",
  tertiary: "#D99441",
  defaultFont: "#0a0a0a",
  favorite: "#F5041F"
};

const darkColors = {
  primaryBackground: "#012840",
  secondaryBackground: "#024067",
  primary: "#F2C791",
  primaryContrast: "#849EBF",
  secondary: "#566D8C",
  tertiary: "#BFA288",
  defaultFont: "#f2faff",
  favorite: "#F5041F"
};

export const lightTheme = { ...commonTheme, colors: { ...lightColors } };

export const darkTheme = { ...commonTheme, colors: { ...darkColors } };
