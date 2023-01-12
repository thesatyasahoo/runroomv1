import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export const UsersListToolbar = (props) => (
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
        List Of Users
      </Typography>
      <NextLink href={"/userCreate"} passHref>
        <Button variant="contained">CREATE</Button>
      </NextLink>
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);
