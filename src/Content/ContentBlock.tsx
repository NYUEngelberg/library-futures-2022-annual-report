import classNames from "classnames";
import React from "react";

interface ContentBlockProps {
  colors: Array<string>;
  links: React.ReactNode;
  contentBlockTitle?: React.ReactNode;
  otherContent?: React.ReactNode;
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  colors,
  links,
  contentBlockTitle,
  otherContent,
  children,
}) => {
  // const color = ;
  return (
    <>
      <div className={classNames(colors[0], "mb-4")}>
        {contentBlockTitle && (
          <div className={classNames(colors[1], "text-xl md:text-5xl")}>
            {contentBlockTitle}
          </div>
        )}
        <span className="block">
          <div className="">{children}</div>
          {links}
        </span>
      </div>
      {otherContent}
    </>
  );
};

export default ContentBlock;
