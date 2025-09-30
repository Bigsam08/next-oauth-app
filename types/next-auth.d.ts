/**
 * @description This is a module for nex auth routes
 */

import { DefaultSession } from "next-auth";

// re modify the type in the "next-auth" module
declare module "next-auth" {
    // customize session type
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
    }
}

// declear modification for jwt 
declare module "next-auth/jwt"{
    interface JWT {
        id: string;
    }
}