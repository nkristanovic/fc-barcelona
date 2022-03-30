import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../SearchBar/SearchBar';
import {
    position,
    nationality
} from '../../lib/mock/FilterData';
import {
    Wrapper,
    MobileWrapper,
    FilterOption,
    Category,
    Categories,
    Label,
    LabelFilter,
    CheckboxOptionLabel,
    InputCheckbox,
    Title,
    TitleWrapper,
    HorizontalLine,
    LabelWrapper,
    Container,
    FilterList,
    FilterWrapper,
    FilterText,
    CategoriesTransfer
} from './FilterStyle';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    thumb: {
        'background-color': '#fff',
    },
    rail: {
        color: `#fff`,
    },
    track: {
        color: '#fff',
    }
});

const Filter = (props) => {

    const [showDescription, setShowDescrption] = useState(false);
    const [showDescription1, setShowDescrption1] = useState(false);
    const [showDescription2, setShowDescrption2] = useState(false);
    const [showDescription3, setShowDescrption3] = useState(false);
    const classes = useStyles();

    return (
        <>
            <MobileWrapper>
                <TitleWrapper>
                    <Title>First Team</Title>
                </TitleWrapper>
                <FilterOption>
                    <LabelFilter>Filters</LabelFilter>
                    <SearchBar handle={props.handleChange} clear={props.handleClear} />
                    <FilterWrapper>
                        <FilterList onClick={() => setShowDescrption(!showDescription)} />
                        <FilterText>Filters</FilterText>
                    </FilterWrapper>
                </FilterOption>
                <HorizontalLine />
                {showDescription &&
                    <Container>
                        <FilterOption>
                            <LabelWrapper>
                                <Label>Position</Label>
                                {showDescription1 ? (
                                    <IoIosArrowUp
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption1(!showDescription1)}
                                    />
                                ) : (
                                    <IoIosArrowDown
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption1(!showDescription1)}
                                    />
                                )}
                            </LabelWrapper>
                            {showDescription1 && (
                                <Categories>
                                    {position.map((info, index) => (
                                        <Category key={index}>
                                            <InputCheckbox
                                                type="checkbox"
                                                name="category"
                                                value={info.position}
                                                id={index}
                                                onChange={props.handlePositionChange}
                                            />
                                            <CheckboxOptionLabel>
                                                {info.position}
                                            </CheckboxOptionLabel>
                                        </Category>
                                    ))}
                                </Categories>
                            )}
                        </FilterOption>
                        <HorizontalLine />
                        <FilterOption>
                            <LabelWrapper>
                                <Label>Nationality</Label>
                                {showDescription2 ? (
                                    <IoIosArrowUp
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption2(!showDescription2)}
                                    />
                                ) : (
                                    <IoIosArrowDown
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption2(!showDescription2)}
                                    />
                                )}
                            </LabelWrapper>
                            {showDescription2 && (
                                <Categories>
                                    {nationality.map((info, index) => (
                                        <Category key={index}>
                                            <InputCheckbox
                                                type="checkbox"
                                                name="category"
                                                value={info}
                                                id={index}
                                                onChange={props.handleCategoriesChange}
                                            />
                                            <CheckboxOptionLabel>
                                                {info}
                                            </CheckboxOptionLabel>
                                        </Category>
                                    ))}
                                </Categories>
                            )}
                        </FilterOption>
                        <HorizontalLine />
                        <FilterOption>
                            <LabelWrapper>
                                <Label>Transfer Value (€m)</Label>
                                {showDescription3 ? (
                                    <IoIosArrowUp
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption3(!showDescription3)}
                                    />
                                ) : (
                                    <IoIosArrowDown
                                        size={25}
                                        color={'#ffffff'}
                                        onClick={() => setShowDescrption3(!showDescription3)}
                                    />
                                )}
                            </LabelWrapper>
                            {showDescription3 && (
                                <CategoriesTransfer>
                                    <Category>
                                        <Slider
                                            value={props.value}
                                            onChange={props.changePrice}
                                            valueLabelDisplay='on'
                                            min={0}
                                            max={100}
                                            classes={{
                                                thumb: classes.thumb,
                                                rail: classes.rail,
                                                track: classes.track,
                                            }}
                                        />
                                    </Category>
                                </CategoriesTransfer>
                            )}
                        </FilterOption>
                        {showDescription3 ?
                            null : <HorizontalLine />
                        }
                    </Container>
                }
            </MobileWrapper>
            <Wrapper>
                <TitleWrapper>
                    <Title>First Team</Title>
                </TitleWrapper>
                <FilterOption>
                    <LabelFilter>Filters</LabelFilter>
                    <SearchBar handle={props.handleChange} clear={props.handleClear} />
                </FilterOption>
                <HorizontalLine />
                <Container>
                    <FilterOption>
                        <LabelWrapper>
                            <Label>Position</Label>
                            {showDescription1 ? (
                                <IoIosArrowUp
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption1(!showDescription1)}
                                />
                            ) : (
                                <IoIosArrowDown
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption1(!showDescription1)}
                                />
                            )}
                        </LabelWrapper>
                        {showDescription1 && (
                            <Categories>
                                {position.map((info, index) => (
                                    <Category key={index}>
                                        <InputCheckbox
                                            type="checkbox"
                                            name="category"
                                            value={info.position}
                                            id={index}
                                            onChange={props.handlePositionChange}
                                        />
                                        <CheckboxOptionLabel>
                                            {info.position}
                                        </CheckboxOptionLabel>
                                    </Category>
                                ))}
                            </Categories>
                        )}
                    </FilterOption>
                    <HorizontalLine />
                    <FilterOption>
                        <LabelWrapper>
                            <Label>Nationality</Label>
                            {showDescription2 ? (
                                <IoIosArrowUp
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption2(!showDescription2)}
                                />
                            ) : (
                                <IoIosArrowDown
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption2(!showDescription2)}
                                />
                            )}
                        </LabelWrapper>
                        {showDescription2 && (
                            <Categories>
                                {nationality.map((info, index) => (
                                    <Category key={index}>
                                        <InputCheckbox
                                            type="checkbox"
                                            name="category"
                                            value={info}
                                            id={index}
                                            onChange={props.handleCategoriesChange}
                                        />
                                        <CheckboxOptionLabel>
                                            {info}
                                        </CheckboxOptionLabel>
                                    </Category>
                                ))}
                            </Categories>
                        )}
                    </FilterOption>
                    <HorizontalLine />
                    <FilterOption>
                        <LabelWrapper>
                            <Label>Transfer Value (€m)</Label>
                            {showDescription3 ? (
                                <IoIosArrowUp
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption3(!showDescription3)}
                                />
                            ) : (
                                <IoIosArrowDown
                                    size={25}
                                    color={'#ffffff'}
                                    onClick={() => setShowDescrption3(!showDescription3)}
                                />
                            )}
                        </LabelWrapper>
                        {showDescription3 && (
                            <CategoriesTransfer>
                                <Category>
                                    <Slider
                                        value={props.value}
                                        onChange={props.changePrice}
                                        valueLabelDisplay='on'
                                        min={0}
                                        max={100}
                                        classes={{
                                            thumb: classes.thumb,
                                            rail: classes.rail,
                                            track: classes.track,
                                            root: classes.root
                                        }}
                                    />
                                </Category>
                            </CategoriesTransfer>
                        )}
                    </FilterOption>
                    {showDescription3 ?
                        null : <HorizontalLine />
                    }
                </Container>
            </Wrapper>
        </>
    );
};

export default Filter;