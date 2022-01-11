import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  searchBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  appBar: {
    backgroundColor: "white !important",
    color: "#424242 !important",
    boxShadow: "none !important",
    borderRadius: "15px !important",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    color: "#00b2ff",
  },
  btnAddTask: {
    backgroundColor: "#3e80ff !important",
    color: "white !important",
  },
});
export { useStyles };
