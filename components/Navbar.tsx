import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-show.png";
import { CgProfile } from "react-icons/cg";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = {};
  return (
    <nav className="navbar bg-base-100 border-b-2 flex w-full justify-between">
      <div className="flexStart mr-5">
        <Link href="/">
          <Image alt="k_red" src={logo} width={70} height={70} />
        </Link>
      </div>
      <ul className="xl-flex justify-between text-small gap-7">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.text}
          </Link>
        ))}
      </ul>
      <div className="gap4 flex align-middle ">
        {session ? (
          <>
            {/* <Image alt="" src={CgProfile} width={100} height={100} /> */}
            <CgProfile />
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
