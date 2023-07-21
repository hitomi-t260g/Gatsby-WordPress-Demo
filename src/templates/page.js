import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRenderComponents } from "../config/blockRenderComponents";
import { Link } from "gatsby";

const Page = (props) => {
  console.log("PAGE PROPS:", props);
  return (
    <>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRenderComponents}
        siteDomain={process.env.GATSBY_WP_URL}
        customInternalLinkComponent={(
          { children, internalHref, className },
          index
        ) => {
          return (
            <Link to={internalHref} className={className} key={index}>
              {children}
            </Link>
          );
        }}
      />
    </>
  );
};
export default Page;
