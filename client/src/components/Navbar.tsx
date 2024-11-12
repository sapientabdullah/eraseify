import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="rounded-full border border-gray-800 shadow m-5">
      <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <Link to="/">
          <img
            src="/logo.jpg"
            className="rounded-lg tranform duration-500 hover:scale-105"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-black text-white text-sm rounded-full flex items-center justify-center px-4 py-2 border border-gray-800 transform duration-500 hover:scale-105 hover:bg-gray-900 active:bg-gray-900 focus:ring-4 focus:ring-gray-900"
          >
            <span>Sign in</span>
            <IoIosArrowRoundForward className="ml-1" />
          </button>
        )}
      </div>
    </nav>
  );
}
