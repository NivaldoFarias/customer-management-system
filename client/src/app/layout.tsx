import { Poppins } from "@next/font/google";

import { DataProvider } from "./data-provider";

import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.scss";

const poppins = Poppins({
  weight: "700",
  style: [ "normal", "italic" ],
  preload: true,
  subsets: [ "devanagari", "latin-ext", "latin" ],
  fallback: [ "ubuntu", "sans-serif" ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={poppins.className}
    >
      <head>
        <title>Customer Management Platform</title>
        <meta
          name="Customer Relationship Management System"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </head>
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
