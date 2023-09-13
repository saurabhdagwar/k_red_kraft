import React from "react";
import Image from "next/image";
import FooterImg from "../public/footer-logo.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-evenly footer p-10 bg-base-200 text-base-content w-full absolute bottom-0">
      <div className="flex item-start flex-col">
        <Image src={FooterImg} alt="Flexible" width="100" height="100" />
      </div>
      <aside>
        <p>K red Copyright © 2023 - All right reserved by Saurabh</p>
      </aside>
    </footer>
  );
};

export default Footer;
