import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Col, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 210,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
  },
  items: {
    padding: '0 30px',
    margin: 8,
  },
  title: {
   color: '#C1CF16',
   fontFamily:"Montserrat",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();
  const values = [
      {
          itemNo: 21,
          itemVal: 'Total Tasks'
      },
      {
        itemNo: 7,
        itemVal: 'Active Tasks'
      },
      {
        itemNo: 6,
        itemVal: 'Tasks Done'
      },
      {
        itemNo: 5,
        itemVal: 'Active High Priority'
      },
      {
        itemNo: 3,
        itemVal: 'Closed High Priority'
      },
  ]

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          { values.map((value) => (
            <Grid key={value.itemNo} item>
              <Paper className={classes.paper}>
                  <Col className={classes.items}>
                    <Row>
                    <h4 className={classes.title}>{value.itemNo}</h4>
                    </Row>
                    <Row>
                    <h6>{value.itemVal}</h6> 
                    </Row>
                  </Col> 
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
