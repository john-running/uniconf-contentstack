import { enhance, EnhancerBuilder } from "@uniformdev/canvas";
import {
  createContentstackEnhancer,
  CANVAS_CONTENTSTACK_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentstack";
import contentstack from "contentstack";

export default function doEnhanceCS(composition: any) {
  const client = contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY || ' ',
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || ' ',
    environment: process.env.CONTENTSTACK_ENVIRONMENT || ' ',
    region: contentstack.Region.US,
  });

  console.log ("composition before enhance", JSON.stringify(composition, null, 2));

  return enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_CONTENTSTACK_PARAMETER_TYPES,
      createContentstackEnhancer({ client })
    ),
    context: {},
  });
}
