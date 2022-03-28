import React, { useState, useRef } from 'react';
import { BarWrapper, SearchIcon, ClearIcon, Input, Search, Close } from './SearchBarStyle';

const SearchBar = (props) => {
    const [inputEmpty, setInputEmpty] = useState(true);
    const searchInput = useRef(null);

    const handleChange = (event) => {
        if (event.target.value === '') {
            setInputEmpty(true);
        } else {
            setInputEmpty(false);
        }
        props.handle(event.target.value);
    };

    const clearInput = () => {
        props.handle('');
        searchInput.current.value = '';
        searchInput.current.focus();
        setInputEmpty(true);
        props.handle('');
    };
    return (
        <>
            <BarWrapper className="Wrapper">
                <Input
                    type="text"
                    placeholder="Search players"
                    onChange={props.handle}
                />
                <SearchIcon>
                    <Search />
                </SearchIcon>
                {!inputEmpty ? (
                    <ClearIcon>
                        <Close onClick={clearInput} />
                    </ClearIcon>
                ) : null}
            </BarWrapper>
        </>
    );
};
export default SearchBar;