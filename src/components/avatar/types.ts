import { PropsWithChildren, ReactNode } from "react";
import { anyObjectWithStringsI } from "../../common/types";

export interface AvatarI {
  classes: anyObjectWithStringsI;
  children?: PropsWithChildren<ReactNode>;
}
