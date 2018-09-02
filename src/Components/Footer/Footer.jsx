import React, { Component } from "react";

//import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import {withStyles} from '@material-ui/core';
import theme from '@theme'


const styles = () => ({
  containerStyles: {
    textAlign: 'right',
    justify: 'centre',
    color: 'blue !important',
    position: 'relative',
    bottom: 0,
    width: '100% !important',
    height: '30px !important',
    background: theme.palette.grey[100]
  },
  footerStyles: {
    color: '#888',
    padding: 5
  }
  
})

class Footer extends Component {
  render() {
    console.log(theme.palette.primary)

    const { classes } = this.props;

    return (
      <div className={classes.containerStyles}>
        <Typography className={classes.footerStyles}>© Sam Isaacs 2018</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
