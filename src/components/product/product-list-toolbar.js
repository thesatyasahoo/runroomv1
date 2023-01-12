import { Typography, Button, Box } from "@mui/material";
import NextLink from "next/link";

export const ProductListToolbar = (props) => (
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
        Products
      </Typography>
      <NextLink href={"/productCreate"} passHref>
        <Button variant="contained">CREATE</Button>
      </NextLink>
    </Box>
  </Box>
);
