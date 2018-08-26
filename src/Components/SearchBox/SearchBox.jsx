import React from 'react';
import {TextField, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = ({isOpen, onClick}) => {
    const baseStyles = {
        open: {
            width: 300,
        },
        closed: {
            width: 0,
        },
        smallIcon: {
            width: 30,
            height: 30
        },
        icon: {
            width: 40,
            height: 40,
            padding: 5
        }
    };
const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
const divStyle = Object.assign({}, textStyle, baseStyles.frame);
    divStyle.width += baseStyles.icon.width + 5;
return (
        <div style={divStyle}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() => onClick()}>
                <SearchIcon />
            </IconButton>
            <TextField
                type="text"
                label={isOpen ? "Type here" : null } 
                name='search' 
                style={textStyle}
                onChange={this.trackQueryValue}
            />
                
        </div>
    );
};
export  default SearchBox;