import "./globals.css";

export const metadata = {
  title: "SignatureMoments",
  description: "Premium products made simple"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
