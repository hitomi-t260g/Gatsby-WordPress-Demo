import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRenderComponents } from "../config/blockRenderComponents";

const Page = (props) => {
  console.log("PAGE PROPS:", props);
  return (
    <>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRenderComponents}
      />
    </>
  );
};
export default Page;
