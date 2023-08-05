import React from "react";

import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { CallToActionButton, MediaText } from "../components";

export const blockRenderComponents = (block) => {
  switch (block.name) {
    case "tgg/ctabutton": {
      console.log("CTA BUTTON DATA:", block);
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
