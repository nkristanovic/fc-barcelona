import React from 'react';
import { BarWrapper, SearchIcon, Input, Search } from './SearchBarStyle';

const SearchBar = (props) => {

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
            </BarWrapper>
        </>
    );
};
export default SearchBar;