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
    width: "110px",
    padding: "5px",
    margin: "10px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatarGroup: {
    display: "inline-block",
  },
  cardBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export { useStyles };
