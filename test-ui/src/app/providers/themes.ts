// themes.ts
import type {Themes} from './themesType'
// 定义主题颜色对象
export const themes: Themes = {
    light: {
      background: {
        primary:"#FFFFFF",
        secondary: "#FFFFFF",
        third: "#FFFFFF"
      },
      text: {
        primary:"#677586",
        secondary: "#2B3138",
        third: "#ffffff"
      },
      button: {
        primary:"#EDF2F9",
        secondary: "#2B3138",
        third: "#000000"
      },
      block: {
        primary:"#EDF2F9",
        secondary: "#000000",
        third: "#FFFFFF"
      }
    },
    dark: {
      background: {
        primary:"#202428",
        secondary: "#FFFFFF",
        third: "#000000"
      },
      text: {
        primary:"#677586",
        secondary: "#EDF2F9",
        third: "#2B3138"
      },
      button:{
        primary:"#2B3138",
        second: "#EDF2F9",
        third: ""
      },
      block: {
        primary:"#141417",
        secondary: "#000000",
        third: "#000000"
      }
    },
  };