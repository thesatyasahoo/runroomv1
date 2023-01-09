import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export const RunroomListToolbar = (props) => (
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
        List Of RunRoom
      </Typography>
      <NextLink href={"/runroom"} passHref>
        <Button variant="contained">CREATE</Button>
      </NextLink>
    </Box>
  </Box>
);
