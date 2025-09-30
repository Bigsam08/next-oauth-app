"use client"

/**
 * @desc This creates a wrapper that serves auth sessions to the app
 */

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers;
