// components/Topbar.js
import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import copy from "copy-to-clipboard";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={() => {
                  actions.setOptions((options) => (options.enabled = !enabled));
                }}
              />
            }
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              const json = query.serialize();
              copy(json);
              setSnackbarMessage("State copied to clipboard");
            }}
          >
            Copy current state
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
