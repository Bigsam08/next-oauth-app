/**
 * @description api endpoint for all auth pages
 *              - login, logout, registeration
 *              - Using nexauth oauth
 */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 24 * 60 * 60 * 7, // 7 days
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // attach token id into session id
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // put user id into token id
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
