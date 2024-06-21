import React from "react";
import { LogoSvg } from "../../assets/icons";

function Footer() {
  return (
    <div>
      <footer className="bg-ungu-muda">
        <div className="container p-16 flex flex-col mx-auto gap-7">
          <div>
            <img className="w-44 h-14" src={LogoSvg} alt="footer-item-logo" />
          </div>
          <div>
            <p className="text-white text-lg max-lg:text-base">
              Penyedia Jasa Talent Terbaik Sepanjang Masa
            </p>
          </div>

          <div className="mt-12 border-t-2 border-white pt-5 flex justify-between flex-wrap max-lg:mt-0">
            <p className="text-white text-lg max-lg:text-base">
              2020 Peworld. All right reserved
            </p>
            <div className="flex gap-5">
              <p className="text-white text-lg max-lg:text-base">Telepon</p>
              <p className="text-white text-lg max-lg:text-base">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
