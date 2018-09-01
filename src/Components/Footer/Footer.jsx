import React, { Component } from "react";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const FooterContainer = styled.div`
  text-align: right;
  justify: centre;
  color: blue !important;
  position: relative;
  bottom: 0;
  width: 100% !important;
  height: 30px !important ;
  background: #EEE;
`;

const footerStyles = {
  color: '#888',
  padding: 5
}

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography style={footerStyles}>© Sam Isaacs 2018</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;
