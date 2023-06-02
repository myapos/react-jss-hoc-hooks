import Avatar from "../components/avatar/Avatar";
import Article from "../components/article/Article";

import useReactJssStyles from "../hooks/useReactJssStyles";

import { styles } from "./styles";

const BlogPage = () => {
  const classes = useReactJssStyles({ styles });

  return (
    <main className={classes.main}>
      <Article />
      <Avatar>Author: Myron</Avatar>
    </main>
  );
};

export default BlogPage;
