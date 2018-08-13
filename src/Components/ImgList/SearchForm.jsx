import React, { Component } from 'react';
import { Button, TextField } from '../../../node_modules/@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

export default class SearchForm extends Component {
  state = {
    searchText: ''
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.onSearch(this.state.searchText);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <MuiThemeProvider theme={theme}>
          <TextField label="Search" type="search" onChange={this.onSearchChange} ref={input => (this.query = input)} margin="normal" />

          <Button type="submit" variant="outlined" color="primary" className="search-button"><i className="material-icons icn-search">search</i></Button>
        </MuiThemeProvider>
      </form>
    );
  }
}