import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  userGroupImage: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between",
  },
  avatarGroup: {
    display: "inline-block",
    margin: "0px 10px",
  },
  taskTitle: {
    fontWeight: "500",
    // display: "flex",

    fontSize: "1.2rem",
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",

    // alignItems: "center",
  },
});

export { useStyles };
