import { switzer } from "./fonts";
import "../styles/main.scss";

import { Cursor } from "motion-plus/react";

export const metadata = {
  title: "Nick Hibbits",
  description: "Web development portfolio site for Nick Hibbits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Cursor
        style={{ width: 5, height: 5 }}
        matchTextSize={false}
        className="cursor"
      />
      <Cursor
        follow
        center={{ x: 0.5, y: 0.5 }}
        spring={{ stiffness: 1000, damping: 50 }}
        magnetic={{ snap: 0.9, padding: 0 }}
        matchTextSize={false}
        style={{ width: 40, height: 40, borderRadius: 200 }}
        variants={{
          magnetic: { opacity: 0 },
        }}
        className="reticule"
      />

      <body className={switzer.variable}>{children}</body>
    </html>
  );
}
