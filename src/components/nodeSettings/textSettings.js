import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
  return (
    <FormControl className="text-additional-settings" size="small">
      <FormLabel component="legend">Font size</FormLabel>
      <Slider
        value={fontSize || 7}
        step={1}
        min={7}
        max={50}
        valueLabelDisplay="auto"
        onChange={(_, value) => {
          setProp((props) => (props.fontSize = value));
        }}
      />
    </FormControl>
  );
};

export default TextSettings;
