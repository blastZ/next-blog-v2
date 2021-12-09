import { Grid, Divider } from "@mui/material";
import { ReactChild, ReactChildren } from "react";
import { AboutMe } from "../AboutMe";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: { children: ReactChild | ReactChildren }) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid id="content" item container py={6} mt={8}>
        {children}
      </Grid>
      <Divider />
      <Grid item>
        <AboutMe />
      </Grid>
      <Divider />
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
