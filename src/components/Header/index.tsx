import classNames from "classnames";

import logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { LangButton } from "../LangButton";

export const Header = () => {
  return (
    <header
      className={classNames(
        "w-full h-20 bg-transparent absolute top-0 left-0 right-0"
      )}>
      <div className="container mx-auto w-full h-full flex items-center justify-between">
        <img
          src={logo}
          alt="Heroflix Logo"
          className="w-28 cursor-pointer"
        />
        <div className="flex gap-8 items-center relative">
          <LangButton />
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};
