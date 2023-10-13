import React from "react";
import Link from "next/link";
const Navbar = () => {
  const navDatas = [
    { title: "About", path: "#About" },
    { title: "Projects", path: "#Projects" },
    { title: "Contact", path: "#Contact" },
  ];
  return (
    <nav className=" justify-around ">
      {navDatas.map((data) => (
        <Link rel="stylesheet" href={data.path}>
          {data.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
