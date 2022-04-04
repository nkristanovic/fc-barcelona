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
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    const [event, setEvent] = useState(players);
    const [show, setShow] = useState(false);
    const handleSearch = (e) => {
        setValue(e.target.value)
    };

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

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    const compareByName = (a, b) => {
        const eventA = a.name.toUpperCase();
        const eventB = b.name.toUpperCase();

        if (eventA < eventB) {
            return -1;
        }
        if (eventA > eventB) {
            return 1;
        }
        return 0;
    };

    const compareByAge = (a, b) => {
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
            return 1;
        }
        return 0;
    };

    const compareByNumber = (a, b) => {
        if (a.number > b.number) {
            return 1;
        }
        if (a.number < b.number) {
            return -1;
        }
        return 0;
    };

    const compareByValue = (a, b) => {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    };

    const sort = (sortMethod) => {
        let dataToSort;

        switch (sortMethod) {
            case 'byDefault':
                dataToSort = [...players];
                break;
            case 'byAge':
                dataToSort = [...event].sort(compareByAge);
                break;
            case 'byName':
                dataToSort = [...event].sort(compareByName);
                break;
            case 'byNumber':
                dataToSort = [...event].sort(compareByNumber);
                break;
            case 'byValue':
                dataToSort = [...event].sort(compareByValue);
                break;
            default:
                break;
        }
        setShow(false);
        setEvent(dataToSort);
        // console.log(dataToSort);
    };

    const handleClose = () => {
        setShow(false)
    }
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
                        sortMethod1={() => sort('byDefault')}
                        sortMethod2={() => sort('byName')}
                        sortMethod3={() => sort('byAge')}
                        sortMethod4={() => sort('byNumber')}
                        sortMethod5={() => sort('byValue')}
                        show={show}
                        open={() => setShow(true)}
                        close={handleClose}
                    />
                </Left>
                <Right>
                    <Grid>
                        {
                            event
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

