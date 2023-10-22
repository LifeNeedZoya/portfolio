import React from "react";
import { useState } from "react";
import { PiRowsDuotone } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const isActive = usePathname();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const navDatas = [
    { data: "Home", Path: "/" },
    { data: "Expertise", Path: "/expertise" },
    { data: "Contact", Path: "/contact" },
  ];

  return (
    <nav className="sm:flex container mx-auto justify-around font-normal lg:font-extrabold  ">
      <div className="">
        <img src="/images/whitelogo.png" className="w-20   " alt="" />
      </div>
      <div className=" gap-4 font-medium  hidden md:flex md:visible flex flex-row text-lg">
        <li>
          {navDatas.map((data) => (
            <ul>
              <Link
                className={`${
                  isActive === data.Path
                    ? "text-blue-500"
                    : "hover:text-pink-400"
                }`}
                href={data.Path}
              >
                // {data.data}{" "}
              </Link>
            </ul>
          ))}
        </li>
      </div>
      <li className="md:hidden " id="navbarIcon">
        <ul
          onMouseEnter={handleDrawer}
          onMouseLeave={() => {
            setIsOpenDrawer(false);
          }}
          className="inline-block"
        >
          <PiRowsDuotone className="w-11 h-11" />
        </ul>
        {
          <ul className="">
            {isOpenDrawer &&
              navDatas.map((data, i) => (
                <li>
                  <Link
                    className={` ${
                      isActive === data.Path
                        ? "text-red-600 "
                        : "hover:text-green-500"
                    }`}
                    href={data.Path}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
          </ul>
        }
      </li>
    </nav>
  );
};

export default Header;
