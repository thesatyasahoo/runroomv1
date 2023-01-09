import { Typography, Button, Box } from "@mui/material";
import Link from "@mui/material/Link";

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
      <Link href="#" underline="none">
        <Button variant="contained">CREATE</Button>
      </Link>
    </Box>
  </Box>
);
