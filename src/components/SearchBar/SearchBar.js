import React from 'react';
import { BarWrapper, SearchIcon, ClearIcon, Input, Search, Close } from './SearchBarStyle';

const SearchBar = () => {

    return (
        <>
            <BarWrapper className="Wrapper">
                <Input
                    type="text"
                    placeholder="Search players"
                />
                <SearchIcon>
                    <Search />
                </SearchIcon>
                <ClearIcon>
                    <Close />
                </ClearIcon>

            </BarWrapper>
        </>
    );
};
export default SearchBar;