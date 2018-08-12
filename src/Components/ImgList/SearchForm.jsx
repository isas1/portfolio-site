import React, { Component } from 'react';
import { Button, TextField } from '../../../node_modules/@material-ui/core';

export default class SearchForm extends Component {
	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>

        <TextField label="Search" type="search" onChange={this.onSearchChange} ref={input => (this.query = input)} margin="normal" />
        <Button type="submit" variant="outlined" color="primary" className="search-button"><i className="material-icons icn-search">search</i></Button>
				
			</form>
		);
	}
}