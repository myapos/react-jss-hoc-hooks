import { PropsWithChildren, ReactNode, ComponentType } from "react";
import { createUseStyles } from "react-jss";
import { anyObjectWithStringsI } from "../common/types";

import { stylesI } from "../common/types";

const withReactJssStyles = (
  WrapperComponent: ComponentType<any>,
  styles: stylesI
) => ({
  children,
  ...restProps
}: {
  children?: PropsWithChildren<ReactNode>;
  restProps: anyObjectWithStringsI;
}) => {
  const useStyles = createUseStyles(styles);

  const classes = useStyles();

  return (
    <WrapperComponent classes={classes} {...restProps}>
      {children}
    </WrapperComponent>
  );
};

export default withReactJssStyles;
