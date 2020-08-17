import React from 'react';
import './app-header.sass';

const AppHeader = ({ allPosts, likedPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>J.Kholikov</h1>
            <h2>Записей {allPosts}, из низ понравилось {likedPosts}</h2>
        </div>
    )
}
export default AppHeader;