import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Filter from '../../components/Filter/Filter';
import { Grid, SectionContent } from '../../lib/style/generalStyles';
import {
    Left,
    Right,
    Empty
} from './TeamStyle';
import { players } from '../../lib/mock/Cards';

const Team = () => {
    const [genre, setGenre] = useState([]);
    const [genre1, setGenre1] = useState([]);
    const [value, setValue] = useState('');
    const [selectedPrice, setSelectedPrice] = useState([0, 100]);
    const handleChange = e => {
        if (e.target.checked) {
            setGenre([...genre, e.target.value]);
            return e;
        } else {
            setGenre(genre.filter(id => id !== e.target.value));
            return e;
        }
    };

    const handleChange1 = e => {
        if (e.target.checked) {
            setGenre1([...genre1, e.target.value]);
            return e;
        } else {
            setGenre1(genre1.filter(id => id !== e.target.value));
            return e;
        }
    };

    const handleSearch = (e) => {
        setValue(e.target.value)
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    return (
        <>
            <SectionContent columns={2}>
                <Left>
                    <Filter
                        handleChange={handleSearch}
                        handlePositionChange={handleChange}
                        handleCategoriesChange={handleChange1}
                        changePrice={handleChangePrice}
                        value={selectedPrice}
                    />
                </Left>
                <Right>
                    <Grid>
                        {
                            players
                                .filter(events => {
                                    return events.name.toLowerCase().includes(value.toLowerCase());
                                })
                                .filter(
                                    (item) => item.value >= minPrice && item.value <= maxPrice
                                )
                                .filter(position => {
                                    if (genre.length === 0) {
                                        return players;
                                    } else {
                                        return genre.some(category => [position.position].flat().includes(category))
                                    }
                                })
                                .filter(nationality => {
                                    if (genre1.length === 0) {
                                        return players;
                                    } else {
                                        return genre1.some(category => [nationality.nationality].flat().includes(category))
                                    }
                                })
                                .map(info => (
                                    <Cards
                                        key={info.id}
                                        img={info.imgUrl}
                                        alt={info.imgAlt}
                                        numberInfo={info.number}
                                        name={info.name}
                                        position={info.position}
                                        age={info.age}
                                        nationality={info.nationality}
                                        value={info.value}
                                    />
                                ))
                        }
                        {players.length === 0 ? '' : <Empty>This player doesn't exist in Barcelona</Empty>}
                    </Grid>
                </Right>
            </SectionContent>
        </>
    );
};

export default Team;
