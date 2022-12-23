import { Typography, Button, Box } from "@mui/material";
import Router from "next/router";

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
      {/* <Box sx={{ minWidth: 500 }}> */}
      <Button
        size="mideium"
        sx={{ mt: 2 }}
        variant="contained"
        onClick={() => {
          Router.push("/productCreate").catch(console.error);
        }}
      >
        Add Product
      </Button>
      {/* <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search admin"
          variant="outlined"
        /> */}
      {/* </Box> */}
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);
