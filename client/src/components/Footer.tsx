import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="rounded-full border border-gray-800 shadow m-5">
      <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
        <span className="text-sm text-white sm:text-center">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Eraseify
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
