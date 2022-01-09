import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  notificationIcon: { cursor: "pointer" },
  menu: {
    marginTop: "20px",
  },
  nofiItem: {
    display: "flex",
    alignItems: "center",
  },
  nofiRight: {
    display: "flex",
    flexDirection: "column",
  },
  nofiContent: {
    paddingLeft: "5px",
    maxWidth: "300px",
    fontSize: "14px",
  },
  nofiTime: {
    paddingLeft: "5px",
    fontSize: "12px",
  },
});
export { useStyles };
