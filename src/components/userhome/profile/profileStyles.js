import { makeStyles, withStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

export const styles = () =>
  makeStyles((theme) => ({
    profilePic: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    userName: {
      fontFamily: "Arial",
      color: "#2e2e2e",
      fontWeight: "bold",
    },
    email: {
      color: "#575555",
    },
  }));

export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
}))(Badge);
