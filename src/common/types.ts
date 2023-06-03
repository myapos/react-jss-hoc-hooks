import { Classes } from "react-jss";
export interface anyObjectWithStringsI {
  [key: string]: string;
}

export interface anyObjectI {
  [key: string]: any;
}

export interface stylesI {
  [key: string]: anyObjectI;
}

export type stylesT = Classes<string>;
