import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { GatsbyImage } from "gatsby-plugin-image";

const Page = (props) => {
  console.log("PAGE PROPS:", props);
  return (
    <BlockRendererProvider
      allBlocks={props.pageContext.blocks}
      renderComponent={(block) => {
        switch (block.name) {
          case "core/media-text": {
            console.log("RENDER COMPONENT: ", block);
            const content = (
              <div
                className={`$(block.attributes.verticalAlignment ==="center ? "items-center" : "")  flex items-center p-4`}
              >
                <div>
                  <BlockRenderer blocks={block.innerBlocks} />
                </div>
              </div>
            );
            return (
              <div
                key={block.id}
                style={getStyles(block)}
                className={getClasses(block)}
              >
                {block.attributes.mediaPosition === "right" && content}
                <div>
                  <GatsbyImage alt="" image={block.attributes.gatsbyImage} />
                </div>
                {block.attributes.mediaPosition !== "right" && content}
              </div>
            );
          }
        }
      }}
    />
  );
};

export default Page;
