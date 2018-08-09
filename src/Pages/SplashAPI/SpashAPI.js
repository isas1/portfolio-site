import React from 'react';
//import creds from './creds.js';
import ImgList from '../../Components/ImgList/ImgList';
import './style.css';
import { Input } from '../../../node_modules/@material-ui/core';

class SpashAPIPage extends React.Component {

  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    const APP_ID = '2f865e7e549eee7c61b5503ce26f540b0687d2fbbae22a4307b9a6d8bdc913f8'

    fetch('https://api.unsplash.com/photos/?client_id=' + APP_ID)
      .then(res => res.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  render() {
    return (
      <div>
        {/*Photos in here*/}
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title"><Input placeholder="What would you like to see?"/></h1>
          </div>
        </div>
        <div className="main-content">
          <ImgList data={this.state.imgs} />
        </div>
      </div >
    );
  }
};


export default SpashAPIPage;
