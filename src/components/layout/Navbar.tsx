"use client";

import { navIcons, navLinks } from "@/constants";
import useWindowsStore from "@/store/windows";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(dayjs().format("ddd MMM D h:mm A"));

    const timer = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm A"));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const { openWindow } = useWindowsStore();

  const handleNavClick = (type: string) => {
    switch (type) {
      case "finder":
        // For Projects, we open finder and set the category to Projects
        openWindow("finder", { activeCategory: "Projects" });
        break;
      case "resume":
        openWindow("resume");
        break;
      case "contact":
        openWindow("safari", { view: "contact" });
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <div>
        <Image src={"/images/logo.svg"} alt="Logo" width={15} height={15} />
        <p className="font-bold">Pawan's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => handleNavClick(item.type)}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <Image
                src={icon.img}
                alt={"icon"}
                width={100}
                height={100}
                className="h-auto w-[16px] icon-hover"
              />
            </li>
          ))}
        </ul>

        <time className="min-w-[140px] text-right">{time}</time>
      </div>
    </nav>
  );
};

export default Navbar;
