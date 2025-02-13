import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    navButton: "Home",
    href: "/",
  },
  {
    id: 2,
    navButton: "User Data",
    href: "/userdata",
  },
  {
    id: 3,
    navButton: "Login",
    href: "/login",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 p-7 bg-slate-500">
        <div className="flex justify-center gap-10">
          {navLinks.map((navLink, id) => (
            <div key={id} className="">
              <Link
                href={navLink.href}
                className="bg-cyan-600 rounded-xl p-3 text-xl text-gray-800 font-bold hover:bg-cyan-400"
              >
                {/* <div className=""></div> */}
                {navLink.navButton}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
