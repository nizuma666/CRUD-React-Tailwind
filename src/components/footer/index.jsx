import React from "react";
import { LogoSvg } from "../../assets/icons";

function Footer() {
  return (
    <div>
      <footer className="bg-ungu-muda">
        <div className="container p-16 max-lg:p-10 flex flex-col mx-auto gap-y-7">
          <div>
            <img className="w-44 h-14 max-lg:w-32" src={LogoSvg} alt="footer-item-logo" />
          </div>
          <div>
            <p className="text-white text-lg max-lg:text-sm">
              Penyedia Jasa Talent Terbaik Sepanjang Masa
            </p>
          </div>

          <div className="mt-12 border-t-2 border-white pt-5 flex justify-between flex-wrap max-lg:mt-0 text-white text-lg max-lg:text-xs">
            <div className="flex gap-x-1">
              <p>
                2020 Peworld.
              </p>
              <p>All right reserved</p>
            </div>
            <div className="flex gap-5 max-lg:gap-1">
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
