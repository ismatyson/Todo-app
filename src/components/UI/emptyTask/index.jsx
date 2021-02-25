import React, { Component } from 'react';
import NewTask from '../../UI/newTaskModal/index'
import Grid from '@material-ui/core/Grid'

const EmptyTask = () => {
   return(
       <div className="container mt-5">
           
           <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className='mt-3'
           >
         <h6><b>NOTHING HERE</b></h6>
         </Grid>

         <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
         >
         <small>Just like your crush's replies</small>
         </Grid>

         <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className='mt-4'
           >
             <NewTask/>
           </Grid>
        
       </div>
   )
}

export default EmptyTask