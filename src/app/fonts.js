import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/switzer/Fonts/WEB/fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/switzer/Fonts/WEB/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});
