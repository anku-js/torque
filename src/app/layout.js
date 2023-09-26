import "./globals.css";
import { Ultra, Barlow, Stint_Ultra_Expanded, Poppins } from "next/font/google";

export const ultra = Ultra({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ultra",
});
export const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});
export const stintUltra = Stint_Ultra_Expanded({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-stintUltra",
});
export const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Torque - Engineering Works Pvt. Ltd",
  description:
    "Welcome to Torque Engineering Works Pvt Ltd , your trusted partner in maritime excellence. Our experienced team of engineers are dedicated to offer a comprehensive range of services to keep your ships sailing smoothly. We also provide spare parts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${ultra.variable} ${barlow.variable} ${stintUltra.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
