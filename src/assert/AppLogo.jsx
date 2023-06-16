import React from "react";
import { BsAlexa } from "react-icons/bs";

const AppLogo = () => {
  return (
    <a href={"/"} className="logo---brand">
      <BsAlexa size={35} />
      <span className="logo-text ">e-commerce</span>
    </a>
  );
};

export default AppLogo;
