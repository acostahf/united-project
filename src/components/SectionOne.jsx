import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    width: "100%",
    backgroundColor: "#c4c4c4",
  },
  ptag: {
    
  },
  container:{
      width: 600
  }
 
}));
function SectionOne(props) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.ptag}  variant="h6">Tired of having to over pay to learn skills that are avaible for free in order to learn in a group.</Typography>
     </Container>
    </div>
    );
}

export default SectionOne;