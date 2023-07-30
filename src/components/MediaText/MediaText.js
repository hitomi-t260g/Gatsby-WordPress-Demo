import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

export const MediaText = ({
  verticalAlignment,
  style,
  className,
  mediaPosition,
  gatsbyImage,
  children,
}) => {
  const content = (
    <div
      className={`${
        verticalAlignment === "center" ? "items-center" : ""
      }  flex p-4`}
    >
      <div>{children}</div>
    </div>
  );

  return (
    <div style={style} className={className}>
      {mediaPosition === "right" && content}
      <div>
        <GatsbyImage alt="" image={gatsbyImage} />
      </div>
      {mediaPosition !== "right" && content}
    </div>
  );
};
