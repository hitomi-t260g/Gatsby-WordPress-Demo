//Wordpressのdefault上書き規則対応のため、Link にtext-black !important記載あり

import { Link } from "gatsby";
import React from "react";

export const CallToActionButton = ({ label, destination }) => {
  return (
    <Link
      to={destination}
      className="inline-block cursor-pointer rounded-sm bg-yellow-500 py-2 px-4 font-bold uppercase !text-black no-underline transition-colors hover:bg-yellow-400"
    >
      {label}
    </Link>
  );
};
