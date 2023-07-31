import { Link } from "gatsby";
import React from "react";

export const CallToActionButton = ({ label, destination }) => {
  return (
    <Link
      to={destination}
      className="inline-block cursor-pointer rounded-sm bg-yellow-500 py-2 px-4 font-bold uppercase no-underline transition-colors hover:bg-yellow-400"
    >
      {label}
    </Link>
  );
};
