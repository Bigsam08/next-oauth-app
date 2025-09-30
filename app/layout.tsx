/**
 * @description This defines the layout of the entire application.
 *              - SessionProvider from nextAuth gives the react app the access session data in any page
 *              - This will check if the user is authenticated or not.
 */

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./clientRender";

export const metadata: Metadata = {
  title: "Google Auth",
  description: "nextauth google provider for login and registration ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
