import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

export function Header() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item></Grid>
            <Grid item>
              <Typography variant="h6">StackBunch</Typography>
            </Grid>
          </Grid>
          <IconButton color="secondary">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
