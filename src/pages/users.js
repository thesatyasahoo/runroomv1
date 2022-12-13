import Head from "next/head";
import { Box, Container } from "@mui/material";
import { UsersListResults } from "../components/users/users-list-results";
import { UsersListToolbar } from "../components/users/users-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";

const Page = () => (
  <>
    <Head>
      <title>Users</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <UsersListToolbar />
        <Box sx={{ mt: 3 }}>
          <UsersListResults runrooms={customers} />
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
