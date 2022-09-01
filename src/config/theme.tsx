export interface IPaletteState {
  main?: string;
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
}

interface IGrayScale {
  gray100?: string;
  gray200?: string;
  gray300?: string;
  gray400?: string;
  gray500?: string;
  gray600?: string;
  gray700?: string;
}

export type TPaletteColor =
  | "primary"
  | "secondary"
  | "info"
  | "error"
  | "warning"
  | "success"
  | string;

interface IPalette {
  primary?: IPaletteState;
  secondary?: IPaletteState;
  info?: IPaletteState;
  error?: IPaletteState;
  warning?: IPaletteState;
  success?: IPaletteState;
  [k: string]: IPaletteState | undefined;
}

export interface ITheme {
  palette: IPalette;
  textColor: IPalette;
  grayScale: IGrayScale;
}

const defaultTheme: ITheme = {
  palette: {
    primary: {
      main: "#019DF4",
      hover: "#10a9fe",
      active: "#018ddb",
      focus: "#018ddb",
    },
    secondary: {
      main: "#5CB615",
      focus: "#509f12",
      active: "#509f12",
      hover: "#68cd18",
      disabled: "#b9f28c",
    },
  },
  grayScale: {},
  textColor: {
    primary: {
      main: "white",
    },
    secondary: {
      main: "white",
    },
  },
};

/*const Theme = {
  colors: {
    white: "#ffffff",
    primary: "#019DF4",
    primary_hover: "#10a9fe",
    primary_active: "#018ddb",
    secondary: "#5CB615",
    dark: "#0B2739",
    light: "#DBF1FE",
    gray_light_dropdown: "#e9eae8",
    gray_light_dropdown_hover: "#86888c",
    gray_extra_light_dropdown: "#f4f4f3",
    gray_extra_light: "#F5F5F5",
    gray_light: "#D3D4D3",
    gray_medium_light: "#B6B7B7",
    gray_medium: "#86888C",
    gray: "#50535A",
    gray_dark: "#313235",
    magenta: "#E63780",
    magenta_dark: "#922859",
    magenta_light: "#FBC7DE",
    green_light: "#BDE4A4",
    green: "#3C7521",
    purple: "#A13EA1",
    purple_dark: "#642A72",
    purple_light: "#DEBCE4",
    orange: "#EC624B",
    orange_dark: "#983230",
    error: "#dc3545",
    orange_light: "#F8CCCC",
    yellow: "#F28D15",
    yellow_dark: "#9F591F",
    yellow_light: "#F8D2B3",
    /!* Colores estados botones *!/
    green_focus: "#509f12",
    green_active: "#509f12",
    green_hover: "#68cd18",
    green_disabled: "#b9f28c",
    blue_focus: "#018ddb",
    blue_active: "#018ddb",
    blue_hover: "#10a9fe",
    blue_disabled: "#a9e0ff",
    blue_dark_focus: "#071824",
    blue_dark_active: "#071824",
    blue_dark_hover: "#0f364e",
    blue_dark_disabled: "#0b2739",
    transparent: "rgba(245,245,245,0)",
  },
  media: {
    mobile: "768px",
  },
  dropdown: "/assets/icon/icon-down-arrow.svg",
};*/
export default defaultTheme;
