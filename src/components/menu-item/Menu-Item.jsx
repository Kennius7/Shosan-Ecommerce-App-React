import React from "react";
import './Menu-Item.scss';

function MenuItem ({ imageUrl, size, title }) {
    return (
        <div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}}>
            <div className='content'>
                <h1 className='title'>{ title }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem