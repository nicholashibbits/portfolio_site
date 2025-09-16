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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                const follower = document.querySelector('.cursor-follower');
                if (follower) {
                  follower.style.left = e.clientX + 'px';
                  follower.style.top = e.clientY + 'px';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
