// components/user/Button.js
import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import ButtonSettings from "../nodeSettings/buttonSettings";

export const Button = ({ size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
};
