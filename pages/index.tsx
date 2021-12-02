import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  CardContent,
  Grid,
  Typography,
  Card,
  Button,
  CardActions,
} from "@mui/material";

const Home: NextPage = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      maxWidth={{
        xs: "100%",
        md: 750,
        lg: 970,
        xl: 1170,
      }}
      margin="0 auto"
      px={4}
      minHeight="calc(100vh - 48px - 48px - 64px)"
    >
      <Grid item mt={"16%"}>
        <Typography textAlign="center" variant="h2">
          NEXT BLOG{" "}
          <span
            style={{
              color: "#4db6ac",
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            V2
          </span>{" "}
          IS COMMING SOON 🦄✨
        </Typography>
      </Grid>
      <Grid item mt={4}>
        <Typography textAlign="center" variant="h5" mt={1.5}>
          Click Below Button to Check Progress On The Github
        </Typography>
      </Grid>
      <Grid item mt={8} container justifyContent="center">
        <Button
          sx={{
            fontSize: 22,
            width: 320,
            height: 64,
            color: "#fff",
            maxWidth: "85%",
          }}
          variant="contained"
          color="secondary"
          size="large"
        >
          Check Now
        </Button>
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  const postFiles = fs.readdirSync(path.resolve(process.cwd(), "./posts"));

  const posts = postFiles
    .map((fileName) => {
      const slug = `/posts/${path.basename(fileName)}`;

      const fileContent = fs.readFileSync(
        path.resolve(process.cwd(), `./posts/${fileName}`),
        "utf-8"
      );

      const post = matter(fileContent);

      return {
        data: post.data,
        content: post.content,
      };
    })
    .filter((o) => o.data.published)
    .sort(
      (a, b) =>
        Number(new Date(b.data.createdAt)) - Number(new Date(a.data.createdAt))
    );

  const categoriesObj = posts.reduce((result, current) => {
    current.data.tags.map((tag: string) => {
      result[tag] ? (result[tag] += 1) : (result[tag] = 1);
    });

    return result;
  }, {} as { [categoryName: string]: number });

  const categories = [{ name: "all", count: posts.length }].concat(
    Object.keys(categoriesObj).map((key) => ({
      name: key,
      count: categoriesObj[key],
    }))
  );

  return {
    props: {
      posts,
      categories,
    },
  };
}

export default Home;
