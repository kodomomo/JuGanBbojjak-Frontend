import { DefaultTheme } from "styled-components";

const colors = {
  Main: "#1A9FFF",
  Main800: "#016DD1",
  Sub: "#02559B",
  Black: "#000000",
  Black800: "#2E2E2E",
  Black700: "#4B4A4A",
  Black600: "#636363",
  Grey500: "#9D9D9D",
  Grey400: "#B7B5B5",
  Menubar: "#E4E4E4",
  White: "#FFFFFF",
  Green: "#04DF00",
  Yellow: "#04C900",
  Black: "#000000",
  Gray900: "#1A1A1A",
  Gray800: "#333333",
  Gray700: "#4D4D4D",
  Gray600: "#666666",
  Gray500: "#808080",
  Gray400: "#999999",
  Gray300: "#E8E8E8",
  Gray200: "#F0F0F0",
  Gray100: "#F7F7F7",
  Gray50: "#FBFBFB",
  White: "#FFFFFF",
  Green: "#04DF00",
  Green100: "#04C900",
  Red: "#E84045",
  Red100: "#D13A3E",
};

const fonts = {
  Bold32: `900 2rem 'Pretendard'`,
  Bold28: `900 1.75rem 'Pretendard'`,
  Bold24: `900 1.5rem 'Pretendard'`,
  Bold20: `900 1.3rem 'Pretendard'`,
  Bold16: `900 1rem 'Pretendard'`,
  Bold12: `900 0.75rem 'Pretendard'`,
  Semibold32: `600 2rem 'Pretendard'`,
  Semibold28: `600 1.75rem 'Pretendard'`,
  Semibold24: `600 1.5rem 'Pretendard'`,
  Semibold20: `600 1.3rem 'Pretendard'`,
  Semibold16: `600 1rem 'Pretendard'`,
  Semibold12: `600 0.75rem 'Pretendard'`,
  Medium32: `500 2rem 'Pretendard'`,
  Medium28: `500 1.75rem 'Pretendard'`,
  Medium24: `500 1.5rem 'Pretendard'`,
  Medium20: `500 1.3rem 'Pretendard'`,
  Medium16: `500 1rem 'Pretendard'`,
  Medium14: `500 0.875rem 'Pretendard'`,
  Medium12: `500 0.75rem 'Pretendard'`,
  Regular32: `400 2rem 'Pretendard'`,
  Regular28: `400 1.75rem 'Pretendard'`,
  Regular24: `400 1.5rem 'Pretendard'`,
  Regular20: `400 1.3rem 'Pretendard'`,
  Regular16: `400 1rem 'Pretendard'`,
  Regular12: `400 0.75rem 'Pretendard'`,
  Light32: `300 2rem 'Pretendard'`,
  Light28: `300 1.75rem 'Pretendard'`,
  Light24: `300 1.5rem 'Pretendard'`,
  Light20: `300 1.3rem 'Pretendard'`,
  Light16: `300 1rem 'Pretendard'`,
  Light12: `300 0.75rem 'Pretendard'`,
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
