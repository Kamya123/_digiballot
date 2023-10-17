import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

import feature_bg from '../../assets/ch_f.png'
import { features } from '../../data';
import Card from '../../UI/Card';


const Features = () => {
    return (
        <section className="features">
            <img src={feature_bg} alt="Featutes Background" />
            <div className="features_container">
                <div className="features_contains">
                    <h1>Why Us?</h1>
                    <div className='features_wrapper'>
                    {
                        features.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className="features_feature" key={id} >
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className="btn sm">Learn More <AiFillCaretRight /> </Link>
                                </Card>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </section>
    )
}

export default Features
