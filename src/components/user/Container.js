// components/user/Container.js
import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import ContainerSettings from "../nodeSettings/containerSettings";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  console.log("background", background);
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};

export const ContainerDefaultProps = {
  background: "red",
  padding: 30,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};

