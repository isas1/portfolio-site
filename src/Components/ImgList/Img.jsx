import React from 'react';
import Paper from '@material-ui/core/Paper';

const Img = props => (

  <Paper>
    <img src={props.url} alt=""/>
  </Paper>


  /*
  <li className="img-wrap">
    <img src={props.url} alt=""/>
  </li>
  */
  
);

export default Img;
