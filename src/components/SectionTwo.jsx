import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Button } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",    
    height: "50px",
    // width: "100%",
    backgroundColor: "#09E2D5",
    paddingLeft: 200,
    paddingRight: 200
  },
  ptag: {
    
  },

  btn:{
    backgroundColor: "#E21BE7",
    color: "#fff",
    alignItems: "end"
  }
 
}));
function SectionOne(props) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography className={classes.ptag}  variant="h6">Try it now for free!</Typography>
        <Button className={classes.btn}>
          Join!
        </Button>
    </div>
    );
}

export default SectionOne;