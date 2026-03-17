import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/Switzer/WEB/fonts/Switzer-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer/WEB/fonts/Switzer-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer/WEB/fonts/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer/WEB/fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer/WEB/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});
