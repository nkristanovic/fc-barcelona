import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';

import {
    Wrapper,
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
    InputRange,
    Dodaj,
    FilterList,
    FilterWrapper,
    FilterText
} from './FilterStyle';

import SearchBar from '../SearchBar/SearchBar';


const Filter = (props) => {
    const [showDescription, setShowDescrption] = useState(false);
    const [showDescription1, setShowDescrption1] = useState(false);
    const [showDescription2, setShowDescrption2] = useState(false);
    const [showDescription3, setShowDescrption3] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [state, setState] = useState(0);

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();
    });

    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>First Team</Title>
                </TitleWrapper>
                <FilterOption>
                    <LabelFilter>Filters</LabelFilter>
                    <SearchBar handle={props.handleChange} />
                    {isMobile ? (
                        <FilterWrapper>
                            <FilterList onClick={() => setShowDescrption(!showDescription)} />
                            <FilterText>Filters</FilterText>
                        </FilterWrapper>
                    ) : <FilterWrapper>
                        <FilterList onClick={() => setShowDescrption(!showDescription)} />
                        <FilterText>Filters</FilterText>
                    </FilterWrapper>}
                </FilterOption>
                <HorizontalLine />
                <Dodaj>
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
                                <Category>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='1'
                                    />
                                    <CheckboxOptionLabel>
                                        Goalkeeper
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='2'
                                    />
                                    <CheckboxOptionLabel>
                                        Defender
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='3'
                                    />
                                    <CheckboxOptionLabel>
                                        Midfielder
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='4'
                                    />
                                    <CheckboxOptionLabel>
                                        Forward
                                    </CheckboxOptionLabel>
                                </Category>
                            </Categories>
                        )}
                    </FilterOption>
                    <HorizontalLine />
                    <FilterOption>
                        <LabelWrapper>
                            <Label>Age</Label>
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
                            <Category>
                                <Categories>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='1'
                                    />
                                    <CheckboxOptionLabel>
                                        16-18
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='2'
                                    />
                                    <CheckboxOptionLabel>
                                        18-23
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='3'
                                    />
                                    <CheckboxOptionLabel>
                                        23-28
                                    </CheckboxOptionLabel>
                                    <InputCheckbox
                                        type="checkbox"
                                        name="category"
                                        value='4'
                                    />
                                    <CheckboxOptionLabel>
                                        28-40
                                    </CheckboxOptionLabel>
                                </Categories>
                            </Category>
                        )}
                    </FilterOption>
                    <HorizontalLine />
                    <FilterOption>
                        <LabelWrapper>
                            <Label>Transfer Value</Label>
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
                            <Categories>
                                <Category>
                                    <InputRange
                                        type="range"
                                        name="category"
                                        min={0}
                                        max={300}
                                        value={state}
                                    />
                                    <Label>€{state}.00m</Label>
                                </Category>
                            </Categories>
                        )}
                    </FilterOption>
                    <HorizontalLine />
                </Dodaj>
            </Wrapper>
        </>
    );
};

export default Filter;