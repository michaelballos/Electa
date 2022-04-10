import { ScrollArea } from "@mantine/core";
import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { electaSpec } from "../api_specification/spec";

const ApiDoc = ({ spec }) => {
  return (
    <ScrollArea
      style={{ height: "100%", backgroundColor: "white" }}
      type="always"
    >
      <SwaggerUI spec={spec} />
    </ScrollArea>
  );
};

export const getStaticProps = async (ctx) => {
  const spec = createSwaggerSpec({
    definition: {
      ...electaSpec,
    },
  });
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
