import React from 'react';
import './Homepage.scss';




function HomePage() {
  return (
    <div className='home-page'>
        <div className='directory-menu'>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span classname='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage