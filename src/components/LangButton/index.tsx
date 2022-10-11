import { useState } from "react";

import { CaretDown, Globe } from "phosphor-react";

type OptionLangs = {
  primary: string;
  secondary: string;
};

type ChoseLangProps = {
  children: string;
  setDropdown: (value: boolean) => void;
  setLang: (value: string) => void;
  lang: string;
  langList: OptionLangs;
};

const ChoseLang = ({
  children,
  setDropdown,
  setLang,
  lang,
  langList
}: ChoseLangProps) => {
  function handleLang() {
    setDropdown(false);
    if (lang === langList.primary) {
      setLang(langList.primary);
    } else if (lang === langList.secondary) {
      setLang(langList.secondary);
    }
  }
  return (
    <button
      className="py-2 px-4 w-full hover:bg-neutral-800"
      onClick={handleLang}>
      {children}
    </button>
  );
};

type LangButtonProps = { reverse?: boolean };

export const LangButton = ({ reverse }: LangButtonProps) => {
  const languageInitialState = { primary: "English", secondary: "Portuguese" };

  const [language, setLanguage] = useState(languageInitialState.primary);

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        data-dropdown-toggle="dropdown"
        className="border-2 border-zinc-500 focus:ring-2 focus:outline-none focus:ring-zinc-200 font-medium rounded text-sm px-3 py-[10px] text-center inline-flex items-center"
        onClick={() => setDropdown(!dropdown)}>
        <span className="inline-flex mr-1">
          <Globe
            size={20}
            color="#f5f5f5"
          />
          {language}
        </span>
        <CaretDown
          size={20}
          color="#f5f5f5"
        />
      </button>
      <div
        id="dropdown"
        className={`absolute ${
          reverse ? "-top-32" : "-bottom-32"
        } bg-black rounded py-4 ${dropdown ? "visible" : "invisible"}`}>
        <ul>
          <li>
            <ChoseLang
              lang={language}
              langList={languageInitialState}
              setLang={setLanguage}
              setDropdown={setDropdown}>
              English
            </ChoseLang>
          </li>
          <li>
            <ChoseLang
              lang={language}
              langList={languageInitialState}
              setLang={setLanguage}
              setDropdown={setDropdown}>
              Portuguese
            </ChoseLang>
          </li>
        </ul>
      </div>
    </div>
  );
};
