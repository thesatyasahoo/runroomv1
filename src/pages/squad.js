import Head from "next/head";
import { Box, Container } from "@mui/material";
import { SquadListResults } from "../components/squad/squad-list-results";
import { SquadListToolbar } from "../components/squad/squad-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";

const Page = () => (
  <>
    <Head>
      <title>Squad</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <SquadListToolbar />
        <Box sx={{ mt: 3 }}>
          <SquadListResults runrooms={customers} />
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
