import { AvatarI } from "./types";
import { styles } from "./styles";

import withReactJssStyles from "../../hocs/withReactJssStyles";

const Avatar = ({ classes, children }: AvatarI) => {
  return (
    <aside>
      <img
        src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png"
        alt="avatar_photo"
        className={classes.img}
      />
      <div className={classes.author}>{children}</div>
    </aside>
  );
};

export default withReactJssStyles(Avatar, styles);
