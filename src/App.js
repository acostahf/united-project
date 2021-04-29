import React from "react";
// import {Switch, Route} from"react-router-dom
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import CreateGroup from "./pages/CreateGroup";
import Cohorts from "./components/Cohorts";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Welcome to United Cohort</h1>
      <h4>
        This is where like minded people can come together to learn new skills
        as a cohort.
      </h4>

      <Button color="primary">Cohort button</Button>
      <Button color="primary">Create your own Cohort</Button>
      <CreateGroup />
      <Cohorts />
    </div>
  );
}

export default App;
