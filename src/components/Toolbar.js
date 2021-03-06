// components/Toolbox.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";

import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { Container } from "./user/Container";
import { Card } from "./user/Card";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) =>
              connectors.create(
                ref,
                <Button size="small" variant={"contained"}>
                  Click Me
                </Button>
              )
            }
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) =>
              connectors.create(ref, <Text text={"Please Enter Text"} />)
            }
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) =>
              connectors.create(
                ref,
                <Element
                  is={Container}
                  canvas
                  background={"red"}
                  padding={"30px"}
                />
              )
            }
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) => connectors.create(ref, <Card />)}
          >
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
