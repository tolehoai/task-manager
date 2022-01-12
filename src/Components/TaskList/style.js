import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  taskList: {
    margin: "30px 10px",
  },
  name: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#1a2e57",
    marginBottom: "5px",
  },
  divider: {
    marginBottom: "15px !important",
  },
  taskListTop: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    justifyItems: "center",
  },
  btnAddTask: {
    backgroundColor: "#3e80ff !important",
    color: "white !important",
    marginBottom: "15px !important",
  },
});

export { useStyles };
