import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

//get all unique values
const getUnique = (rooms, value) => {
    return [...new Set(rooms.map(room => room[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    //get unique types
    let types = getUnique(rooms, 'type');
    //add all
    types = ['all', ...types];

    //map to jsx
    types = types.map(type => <option value={type} > {type}</ option>)

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className="form-control"
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select className="form-control"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        className="form-control"
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size ${price}</label>
                    <div className="size-inputs">
                        <input
                            className="size-input"
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                        />
                        <input
                            className="size-input"
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            className="size-input"
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            className="size-input"
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}