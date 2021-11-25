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
    <Grid container height="100vh" justifyContent="center" alignItems="center">
      <Grid item xs={10} height="90%">
        <Card>
          <CardContent>
            <Typography textAlign="center" variant="h3">
              NEXT BLOG V2 IS COMMING SOON 🦄✨🌈
            </Typography>
            <Typography textAlign="center" variant="h6" mt={1.5}>
              Click Below Button to Check Progress On The Github
            </Typography>
            <CardActions sx={{ justifyContent: "center", mt: 2 }}>
              <Button variant="outlined">Click Me</Button>
            </CardActions>
          </CardContent>
        </Card>
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
