import { useState } from "react";

import classNames from "classnames";
import { Minus, Plus } from "phosphor-react";

type FAQTypes = {
  title: string;
  description: string;
};

type DataFAQTypes = {
  data: FAQTypes;
};

export const FAQ = ({ data }: DataFAQTypes) => {
  const [showFAQ, setShowFAQ] = useState(false);

  function handleFAQ() {
    setShowFAQ(prev => !prev);
  }

  return (
    <div className="w-full h-full">
      <button
        className="w-full bg-neutral-800 flex items-center justify-between px-8 py-5"
        onClick={handleFAQ}>
        <h3 className="text-3xl">{data.title}</h3>
        <span className="block">
          {!showFAQ ? (
            <Plus
              size={28}
              color="#f5f5f5"
            />
          ) : (
            <Minus
              size={28}
              color="#f5f5f5"
            />
          )}
        </span>
      </button>
      <p
        className={classNames(
          "text-zinc-300 text-2xl w-full max-h-0 overflow-hidden bg-neutral-800 mt-[1px] px-8 transition-all duration-300",
          {
            "max-h-[350px] py-8 overflow-visible": showFAQ
          }
        )}>
        <span
          className={classNames("opacity-0 transition-opacity duration-300", {
            "opacity-100": showFAQ
          })}>
          {data.description}
        </span>
      </p>
    </div>
  );
};
