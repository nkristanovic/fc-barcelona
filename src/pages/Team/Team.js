import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Filter from '../../components/Filter/Filter';
import { Grid, SectionContent } from '../../lib/style/generalStyles';
import {
    Left,
    Right,
    Position
} from './TeamStyle';
import { goalkeepers, defenders, midfielders, forwards } from '../../lib/mock/Cards';

const Team = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <SectionContent columns={2}>
                <Left>
                    <Filter handleChange={(event) => {
                        setSearchTerm(event.target.value)
                    }} />
                </Left>
                <Right>
                    {searchTerm ? null
                        : <Position>Goalkeepers</Position>
                    }
                    <Grid>
                        {
                            goalkeepers
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
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

                                ))}
                    </Grid>
                    {searchTerm ? null
                        : <Position>Defenders</Position>
                    }
                    <Grid>
                        {
                            defenders
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
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

                                ))}
                    </Grid>
                    {searchTerm ? null
                        : <Position>Midfielders</Position>
                    }
                    <Grid>
                        {
                            midfielders
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
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

                                ))}
                    </Grid>
                    {searchTerm ? null
                        : <Position>Forwards</Position>
                    }
                    <Grid>
                        {
                            forwards
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
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

                                ))}
                    </Grid>
                </Right>
            </SectionContent>
        </>
    );
};

export default Team;
