import { switzer } from "./fonts";
import "../styles/main.scss";

export const metadata = {
  title: "Nick Hibbits",
  description: "Web development portfolio site for Nick Hibbits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={switzer.variable}>
        {children}
        <div className="cursor-follower"></div>
      </body>
    </html>
  );
}
