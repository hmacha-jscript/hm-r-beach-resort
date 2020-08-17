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
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'type');
    //add all
    types = ['all', ...types];

    //map to jsx
    types = types.map(type => <option value={type} > {type}</ option>)
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
            </form>
        </section>
    )
}