import React from "react";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="h-[80px] my-10">
      <nav className="flex  justify-between items-center px-16">
        <div>Meta Quest</div>
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#">Demos</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Portfolios</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>

        <div>
          <CustomButton text="Let's Talk" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
