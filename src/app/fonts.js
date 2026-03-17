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

export const supreme = localFont({
  src: [
    {
      path: "../../public/fonts/Supreme/Fonts/WEB/fonts/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
});

// Lato
export const latoThin = localFont({
  src: [{ path: "../../public/Lato/Lato-Thin.ttf", weight: "100", style: "normal" }],
  variable: "--font-lato-thin",
});

export const latoLight = localFont({
  src: [{ path: "../../public/Lato/Lato-Light.ttf", weight: "300", style: "normal" }],
  variable: "--font-lato-light",
});

export const latoRegular = localFont({
  src: [{ path: "../../public/Lato/Lato-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-lato-regular",
});

export const latoBold = localFont({
  src: [{ path: "../../public/Lato/Lato-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-lato-bold",
});

export const latoBlack = localFont({
  src: [{ path: "../../public/Lato/Lato-Black.ttf", weight: "900", style: "normal" }],
  variable: "--font-lato-black",
});

// Oxygen
export const oxygenLight = localFont({
  src: [{ path: "../../public/Oxygen/Oxygen-Light.ttf", weight: "300", style: "normal" }],
  variable: "--font-oxygen-light",
});

export const oxygenRegular = localFont({
  src: [{ path: "../../public/Oxygen/Oxygen-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-oxygen-regular",
});

export const oxygenBold = localFont({
  src: [{ path: "../../public/Oxygen/Oxygen-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-oxygen-bold",
});

// Poppins
export const poppinsThin = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Thin.ttf", weight: "100", style: "normal" }],
  variable: "--font-poppins-thin",
});

export const poppinsExtraLight = localFont({
  src: [{ path: "../../public/Poppins/Poppins-ExtraLight.ttf", weight: "200", style: "normal" }],
  variable: "--font-poppins-extralight",
});

export const poppinsLight = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Light.ttf", weight: "300", style: "normal" }],
  variable: "--font-poppins-light",
});

export const poppinsRegular = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-poppins-regular",
});

export const poppinsMedium = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-poppins-medium",
});

export const poppinsSemiBold = localFont({
  src: [{ path: "../../public/Poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" }],
  variable: "--font-poppins-semibold",
});

export const poppinsBold = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-poppins-bold",
});

export const poppinsExtraBold = localFont({
  src: [{ path: "../../public/Poppins/Poppins-ExtraBold.ttf", weight: "800", style: "normal" }],
  variable: "--font-poppins-extrabold",
});

export const poppinsBlack = localFont({
  src: [{ path: "../../public/Poppins/Poppins-Black.ttf", weight: "900", style: "normal" }],
  variable: "--font-poppins-black",
});
