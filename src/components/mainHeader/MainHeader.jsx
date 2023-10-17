import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/changed.jpg'
import Image2 from '../../assets/check3_-removebg.png'
import quarter from '../../assets/quarter-circle_.png'



const MainHeader = () => {
    return (
        <header className="main_header">
            <div className="main_header-container header-1">
                <div className="main_header-left">
                    <div className="main_header-image">
                        <img src={Image} alt='Main Header Image' className='hero_img' />
                    </div>
                </div>
                <div className="main_header-right">
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem at nobis quam omnis. Sapiente, adipisci maxime? Exercitationem reprehenderit repudiandae blanditiis voluptas.
                    </p>
                    <Link to="/Vote" className='btn lg' >VOTE NOW</Link>
                </div>
                <img src={quarter} alt="Quarter Circle" className='quarter_img' />
            </div>
            
            <div className="main_header-container header-2">
                <div className="main_header-right">
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem at nobis quam omnis. Sapiente, adipisci maxime? Exercitationem reprehenderit repudiandae blanditiis voluptas.
                    </p>
                    <Link to="/Vote" className='btn lg' >CREATE ELECTIONS</Link>
                </div>
                <div className="main_header-left">
                    <div className="main_header-image">
                        <img src={Image2} alt='Main Header Image2' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
