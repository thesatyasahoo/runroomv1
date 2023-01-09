import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export const SquadListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h5">
        List Of Squad
      </Typography>
      {/* <NextLink href={"/squadCreate"} passHref>
        <Button variant="contained">CREATE</Button>
      </NextLink> */}
    </Box>
  </Box>
);
