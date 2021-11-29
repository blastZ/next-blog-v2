import { Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

function ProjectLink() {
  return (
    <Grid container alignItems="center">
      <Grid
        item
        sx={{
          bgcolor: "#000000",
          width: 10,
          height: 10,
          ml: 1,
          mr: 2,
          borderRadius: "50%",
        }}
      />
      <Link
        color="secondary"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/blastZ"
        underline="hover"
      >
        20xx/xx/xx COMMING...
      </Link>
    </Grid>
  );
}

export function AboutMe() {
  return (
    <Grid container paddingX={4} paddingY={6} maxWidth={1170} margin="0 auto">
      <Grid
        item
        xs={12}
        sm={7}
        display={{ xs: "none", sm: "flex" }}
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h6" fontWeight={500}>
            RECENT PROJECTS
          </Typography>
        </Grid>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <ProjectLink />
          </Grid>
          <Grid item>
            <ProjectLink />
          </Grid>
          <Grid item>
            <ProjectLink />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5} container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6" fontWeight={500}>
            ABOUT ME
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={3} maxWidth={104}>
            <Image
              alt="avatar"
              width={500}
              height={500}
              src="/blog-assets/avatar_j7ixf0"
            />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">
              Hi, I&apos;m blastz - A Chinese Full-Stack Engineer. From
              HangZhou, ZheJiang. Have a look at my social media profiles below.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
