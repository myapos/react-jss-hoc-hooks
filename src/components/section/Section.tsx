import { styles } from "./styles";

import withReactJssStyles from "../../hocs/withReactJssStyles";

import { SectionI } from "./types";

const Section = ({ classes, header, text }: SectionI) => {
  return (
    <section className={classes.section}>
      <header>{header}</header>
      <p>{text}</p>
    </section>
  );
};

export default withReactJssStyles(Section, styles);
