import React from "react";

import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { CallToActionButton, Cover, MediaText } from "../components";
import { GatsbyImage } from "gatsby-plugin-image";

export const blockRenderComponents = (block) => {
  switch (block.name) {
    case "core/cover": {
      console.log("COVER DATA:", block);
      return (
        <Cover
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
      );
    }
    case "core/image": {
      return (
        <figure key={block.id} className={getClasses(block)}>
          <GatsbyImage
            style={getStyles(block)}
            image={block.attributes.gatsbyImage}
            alt={block.attributes.alt || ""}
            width={block.attributes.width}
            height={block.attributes.height}
          />
        </figure>
      );
    }
    case "tgg/ctabutton": {
      const alignmap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      };
      return (
        <div className={alignmap[block.attributes.data.align]}>
          <CallToActionButton
            label={block.attributes.data.label}
            destination={block.attributes.data.destination}
          />
        </div>
      );
    }
    case "core/media-text": {
      console.log("RENDER COMPONENT: ", block);
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticalAlignment={block.attributes.verticalAlignment}
          gatsbyImage={block.attributes.gatsbyImage}
          mediaPosition={block.attributes.mediaPosition}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }
  }
};
