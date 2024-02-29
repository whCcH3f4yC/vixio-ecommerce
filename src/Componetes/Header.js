import React from "react";
import vixio from "./Image/vixio_logo.png";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className=" p-5   bg-black text-center">
          <img src={vixio} alt="logo marca" />
        </div>
      </div>
    </header>
  );
};

export default Header;
