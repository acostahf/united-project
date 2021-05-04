import React, { Component } from "react";
import * as cohortAPI from "./services/cohorts-api";
import Cohorts from "./components/Cohorts";
import Hero from "./components/Hero";
import CreateGroup from "./pages/CreateGroup";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",

      contrastText: "#64ffda",
    },
    secondary: {
      main: "#64ffda",

      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Share Tech Mono",
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      cohorts: [],
    };
  }

  async componentDidMount() {
    const cohorts = await cohortAPI.getAll();
    this.setState({ cohorts });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Hero />
        <SectionOne />
        <SectionTwo />
        <CreateGroup />
        <Cohorts cohorts={this.state.cohorts} />
      </ThemeProvider>
    );
  }
}

export default App;
