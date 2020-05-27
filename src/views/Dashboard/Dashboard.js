import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import API from '../../services/backend';


import {
  LatestOrders,
  UsersToolbar
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Dashboard = (props) => {
  const {history} = props
  const classes = useStyles();

  useEffect(() => {
    new API().getAuth()
      .catch(() => {
        history.push('/sign-in')
      })
  }, [])

  return (
    <div className={classes.root}>
      <UsersToolbar/>
      <div className={classes.content}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
