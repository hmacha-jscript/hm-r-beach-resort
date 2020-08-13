import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
    state = {
        icons: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet.'
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet.'
            },
            {
                icon: <FaBeer />,
                title: "strong beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                {
                    this.state.icons.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })
                }
                </div>
            </section>
        )
    }
}
export default Services;