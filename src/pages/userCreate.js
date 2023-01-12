import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { AuthGuard } from "../contexts/auth-guard";
import { customers } from "../__mocks__/customers";
import { UserCreate } from "../components/users/user-create";

const Page = () => (
  <>
    <Head>
      <title>Create User</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}>
          <UserCreate rochams={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    <AuthGuard>{page}</AuthGuard>
  </DashboardLayout>
);

export default Page;
