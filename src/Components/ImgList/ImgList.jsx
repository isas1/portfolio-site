import React from 'react';
import Grid from '@material-ui/core/Grid';
import Img from './Img';
import { withStyles } from '../../../node_modules/@material-ui/core';

import './styles.css';

const styles =
{
	grid: {
		padding: 8
	}
}
const ImgList = props => {
	const results = props.data;
	const { classes } = props;

	let imgs = results.map(img => <Img url={img.urls.small} key={img.id} />);

	return (

		<Grid
			container
			className={classes.grid}
			spacing={16}
			alignItems='flex-start'
			direction='column'
			justify='center'
		>
			{imgs}
		</Grid>


	);
};

export default withStyles(styles)(ImgList);
