import { Box, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";

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
      <Link href="#" underline="none">
        <Button variant="contained">CREATE</Button>
      </Link>
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);
