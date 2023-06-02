import { createUseStyles } from "react-jss";

const useReactJssStyles = ({ styles }: any) => {
  const useStyles = createUseStyles(styles);

  const classes = useStyles();

  return classes;
};

export default useReactJssStyles;
