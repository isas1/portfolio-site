import React from 'react';
import Img from './Img';

import Grid from '@material-ui/core/Grid';

import './styles.css';

const ImgList = props => {
	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.small} key={img.id} />);

	return (

		<Grid container className='root'>
			<Grid item xs={12}>
				<Grid container alignItems="flex-start" spacing="8">
						{imgs}
				</Grid>
			</Grid>
		</Grid>

	);
};

export default ImgList;
