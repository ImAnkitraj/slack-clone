import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { AccessTime,Search,HelpOutline } from '@material-ui/icons';

export default function Header() {
    var user = {
        displayName: 'Raj',
        photoURL:''
    };
    return (
        <div className="header">
            <div className='header__left'>
                {/* Avatars for Loggedin user */}
                <Avatar 
                    className='header__avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* Time icon */}
                <AccessTime />
            </div>
            <div className='header__search'>
                {/* Search icon */}
                <Search/>
                {/* input */}
                <input placeholder='Search' />
            </div>
            <div className='header__right'>
                {/* help icon */}
                <HelpOutline/>
            </div>
        </div>
    )
}
