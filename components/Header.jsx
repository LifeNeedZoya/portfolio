import React from "react";
import Link from "next/link";

const Header = () => {
  const navDatas = [
    { data: "Home", Path: "/" },
    { data: "Contact", Path: "/contact" },
    { data: "About", Path: "/about" },
    { data: "Experience", Path: "/Experiences" },
    { data: "Expertise", Path: "/Expertise" },
  ];
  return (
    <nav className="flex container mx-auto justify-around   ">
      <div className="">
        <img src="/images/whitelogo.png" className="w-20   " alt="" />
      </div>
      <li className="flex justify-center gap-4 font-medium  text-lg">
        {navDatas.map((data) => (
          <ul>
            <Link href={data.Path}>// {data.data} </Link>
          </ul>
        ))}
      </li>
    </nav>
  );
};

export default Header;
