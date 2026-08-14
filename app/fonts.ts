import localFont from "next/font/local";

export const display = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/PlayfairDisplay-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/PlayfairDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/PlayfairDisplay-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/PlayfairDisplay-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const body = localFont({
  src: [
    { path: "./fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const mono = localFont({
  src: [{ path: "./fonts/GeistMonoVF.woff", weight: "100 900", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
});
