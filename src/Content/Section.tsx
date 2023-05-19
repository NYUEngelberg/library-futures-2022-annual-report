import classnames from "classnames";
import React, { useState } from "react";
// @ts-ignore
import collapse from "../assets/icons/collapse.png";
// @ts-ignore
import expand from "../assets/icons/expand.png";
import classNames from "classnames";

interface SectionProps {
  sectionTitle: string;
  children: React.ReactNode;
  sectionOpen?: boolean;
}

const Section: React.FC<SectionProps> = ({
  sectionTitle,
  children,
  sectionOpen = false,
}) => {
  const [isOpen, toggleOpen] = useState(sectionOpen);

  return (
    <section className="relative">
      <button
        className={classNames(
          "w-full z-10 text-left mb-4 text-xl md:text-3xl transition-colors",
          isOpen
            ? "bg-peach2 hover:bg-peach2/70"
            : "bg-peach3 hover:bg-peach3/70"
        )}
        onClick={() => toggleOpen(!isOpen)}>
        <h2 className="flex justify-between">
          {sectionTitle}
          <img
            src={isOpen ? collapse : expand}
            className="h-8 ml-2 mt inline"
            alt=""
          />
        </h2>
      </button>
      <div
        className={classnames(
          isOpen ? "opacity-100 h-full" : "opacity-0 h-0 overflow-hidden"
        )}>
        <div
          className={classnames(
            isOpen ? "h-max opacity-100" : "h-0 opacity-0",
            "section-transition"
          )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
