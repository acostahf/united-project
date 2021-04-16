import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, MenuItem, Select, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "start",
    },
   
  }));


const CreateGroup = () => {
    const classes = useStyles();
    const [catagory, setCatagory] = React.useState('');
    const handleChange = (event) => {
        setCatagory(event.target.value);
      };

    return (
        <div className={classes.root}>
           <FormControl>
           <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catagory}
          onChange={handleChange}
        >
          <MenuItem value={10}>React</MenuItem>
          <MenuItem value={20}>Python</MenuItem>
          <MenuItem value={30}>HTML&CSS</MenuItem>
        </Select>
               <TextField id="standard-basic" label="name"/>
               <TextField id="standard-basic" label="description"/>
               <TextField id="standard-basic" label="name"/>
               <Button>Sumbit</Button>
           </FormControl>

        </div>
    )
}

export default CreateGroup;