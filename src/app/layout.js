import { switzer } from "./fonts";
import "../styles/main.scss";

export const metadata = {
  title: "Portfolio Site",
  description: "Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={switzer.variable}>{children}</body>
    </html>
  );
}
