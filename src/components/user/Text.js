import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import TextSettings from "../nodeSettings/textSettings";

export const Text = ({ text, fontSize, textAlign }) => {
  const [isEditable, setIsEditable] = useState(false);
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected > 0,
    hasDraggedNode: state.events.dragged > 0,
  }));
  useEffect(() => {
    !hasSelectedNode && setIsEditable(false);
  }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setIsEditable(true)}>
      <ContentEditable
        html={text}
        onChange={(e) => {
          setProp((existingProops) => (existingProops.text = e.target.value));
        }}
        disabled={!isEditable}
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
      {/* {hasSelectedNode && (
        <FormControl className="text-additional-settings" size="small">
          <FormLabel component="legend">Font size</FormLabel>
          <Slider
            defaultValue={fontSize}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              setProp((props) => (props.fontSize = value));
            }}
          />
        </FormControl>
      )} */}
    </div>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 15,
  },
  related: {
    settings: TextSettings,
  },
};
