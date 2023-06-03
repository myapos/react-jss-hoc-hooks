import { ComponentType, PropsWithChildren, FC , ReactNode} from "react";
import { createUseStyles } from "react-jss";

import { stylesI, anyObjectWithStringsI } from "../common/types";

const withReactJssStyles =
  <T extends { classes: anyObjectWithStringsI }>(
    WrappedComponent: ComponentType<T>,
    styles: stylesI
  ): FC<Omit<T, "classes">> =>
  (props: Omit<T, "classes"> & PropsWithChildren<any>) => {
    const useStyles = createUseStyles(styles);
    const classes = useStyles();

    return (
      <WrappedComponent classes={classes} {...props}>
        {props.children}
      </WrappedComponent>
    );
  };

export default withReactJssStyles;
