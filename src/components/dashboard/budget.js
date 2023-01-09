import { Card, CardContent } from "@mui/material";

export const Budget = (props) => (
  <Card
    sx={{ height: "100%", display: "flex", justifyContent: "center", paddingTop: "12rem" }}
    {...props}
  >
    <CardContent style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "5rem" }}>Welcome To Admin Panel</h1>
    </CardContent>
  </Card>
);
