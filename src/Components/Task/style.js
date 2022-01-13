import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  taskWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "20px !important",
  },
  taskName: {
    fontSize: "20px !important",
    fontWeight: "700 !important",
    color: "black !important",
  },
  deadline: {
    backgroundColor: "#00c853",
    color: "white",
    fontSize: "14px",
    width: "110px",
    padding: "5px",
    margin: "5px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatarGroup: {
    display: "inline-block",
    marginRight: "5px",
  },
  cardBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  status: {
    paddingLeft: "5px",
  },
  statusAndDate: {
    display: "flex",
    flexDirection: "column",
  },
});
export { useStyles };
