import { Grid, Link } from "@mui/material";
import { GithubIcon } from "../../icons/GithubIcon";

export function Footer() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      paddingY={3}
    >
      <Grid item>
        <Link target="_blank" rel="noreferrer" href="https://github.com/blastZ">
          <GithubIcon />
        </Link>
      </Grid>
    </Grid>
  );
}
