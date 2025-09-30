"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import type { Session } from "next-auth";


const Page = () => {
  const { data: session } = useSession() as { data: Session | null };
  console.log(session);

  if (!session) {
    return (
      <div className="p-4 md:p-16 flex justify-center text center">
        <div className="w-2xl shadow-md p-4">
          <h2 className="text-2xl text-center"> Welcome to Next Oauth App</h2>
          {/** continue text */}
          <div className="flex justify-between items-center mt-8">
            <div className=" border-t border-gray-700 flex-grow"></div>
            <span className="px-4 text-sm">Continue with </span>
            <div className="border-t flex-grow border-gray-700"></div>
          </div>

          {/** google login button */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex items-center gap-3 cursor-pointer px-10 py-2 text-sm bg-gray-50 rounded-sm text-gray-700 mt-8 mx-auto hover:shadow-inset-0 hover:bg-gradient-to-t from-gray-600 hover:text-gray-50 transition duration-300"
          >
            <span>
              {" "}
              <FaGoogle />
            </span>{" "}
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-2xl mx-auto mt-16 shadow-md p-4 text-center space-y-8">
      <p className="text-sm"> Welcome! {session?.user?.name || "N/A"} </p>
      <p className="text-sm"> email: {session?.user?.email || "N/A"} </p>
      <button
        type="button"
        onClick={() => signOut()}
        className="py-2 px-10 text-sm bg-gray-50 flex mx-auto rounded-xl text-gray-800 cursor-pointer transition duration-300 hover:bg-red-100 hover:text-red-500"
      >
        Log out
      </button>
    </div>
  );
};

export default Page;
