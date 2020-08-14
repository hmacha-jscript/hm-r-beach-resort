import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Room extends Component {
    render() {
        const { slug, images, price } = this.props.room;
        return (
            <article className="room">
                <div className="img-container">
                    <img src={images[0]} alt="single-room" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <div>per night</div>
                    </div>
                    <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                        Features
                    </Link>
                </div>
            </article>
        )
    }
}

export default Room;