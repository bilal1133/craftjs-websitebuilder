// components/user/Card.js
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";
import ContainerSettings from "../nodeSettings/containerSettings";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};
export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element is={CardTop} id="cardTop" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element is={CardBottom} id={"cardBottom"} canvas>
        <Button
          size="small"
          text="Learn more"
          variant="contained"
          color="primary"
        >
          Hi there
        </Button>
        <Button
          size="small"
          text="Learn more"
          variant="contained"
          color="primary"
        >
          👋🏻
        </Button>
      </Element>
    </Container>
  );
};
export const CardDefaultProps = {
  background: "#ffffff",
  padding: 30,
};

Card.craft = {
  props: CardDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
