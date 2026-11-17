import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import { site } from "../data/config";

export const metadata = {
  title: `${site.name} | Online Food Order`,
  description: site.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8590C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
