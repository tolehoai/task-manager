import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerWraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 50px",
    margin: "0px 20px",
    borderBottom: "1px solid #d3d3d3",
  },

  leftHeader: {
    display: "flex",
    alignItems: "center",
    flex: "9",
  },

  rightHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "3",
  },

  headerUser: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  userAvatar: {
    display: "inline-block",
    margin: "0 15px",
  },

  userInfo: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
  },

  major: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#9e9e9e",
  },
  userName: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#616161",
  },
  notificationIcon: {
    color: "#9e9e9e",
    cursor: "pointer",
  },
});
export { useStyles };
