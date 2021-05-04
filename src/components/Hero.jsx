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
    backgroundColor: "#F5EFEF",
    
    

  },
 
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography  variant="h2">Welcome to Gather</Typography>
     </Container>
    </div>
  );
}

export default Hero;
