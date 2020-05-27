import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '100%'
  },
  container:{
    width: '70%',
    textAlign: 'center'
  },
  title:{
    marginBottom: '26px'
  }
}));

const Home = props => {

  const { history } = props;

  const classes = useStyles();
  
  const handleClick = () =>{
    history.push('/sign-in')
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant={'h1'}
        >Reduce your offer dropouts, Improve Engagement & Increase branding</Typography>
        <Button
          color="primary"
          onClick={(e) => handleClick(e)}
          size={'large'}
          variant="contained"
        >
          Get Started
        </Button>
      </div>
    </div>
  )

};

Home.propTypes = {
  history: PropTypes.object
};

export default withRouter(Home);
