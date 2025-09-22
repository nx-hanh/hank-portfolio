import localFont from "next/font/local";
const platypi = localFont({
  src: [
    {
      path: "./Platypi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Platypi-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Platypi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Platypi-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Platypi-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Platypi-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./Platypi-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Platypi-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Platypi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Platypi-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Platypi-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Platypi-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});

export default platypi;
