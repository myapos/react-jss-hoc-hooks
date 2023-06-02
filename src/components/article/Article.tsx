import Section from "../section/Section";
import { strings } from "./strings";

const Article = () => {
  return (
    <article>
      <Section header={strings.p1.header} text={strings.p1.text} />
      <Section header={strings.p2.header} text={strings.p2.text} />
    </article>
  );
};

export default Article;
