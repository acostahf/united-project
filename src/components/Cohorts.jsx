import { Card, CardContent } from '@material-ui/core';
import React from 'react';


const Cohorts = (props) => {
    return (
        <div>
        <Card>
           
            {props.cohorts.map((cohort) => (
                <CardContent key={cohort._id}>
                    <p>Name: {cohort.name}</p>
                    <p>Description: {cohort.description}</p>
                    <p>date: {cohort.date}</p>
                    <p>catagory: {cohort.catagory}</p>
                </CardContent>
            ))}
        </Card>
        </div>
    );
}

export default Cohorts;