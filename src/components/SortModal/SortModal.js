import React from 'react';

import {
    SortModalBackground,
    SortModalWrapper,
    SortModalHeader,
    SortModalContent,
    SortModalTitle,
    Triangle
} from './SortModalStyle';

const SortModal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <>
            <SortModalBackground />
            <SortModalWrapper>
                <Triangle />
                <SortModalHeader>
                    <SortModalTitle>Sorted by:</SortModalTitle>
                </SortModalHeader>
                <SortModalContent activeclassname="active" onClick={props.sort1}>
                    Default
                </SortModalContent>
                <SortModalContent activeclassname="active" onClick={props.sort2}>
                    Name
                </SortModalContent>
                <SortModalContent activeclassname="active" onClick={props.sort3}>
                    Age
                </SortModalContent>
                <SortModalContent activeclassname="active" onClick={props.sort4}>
                    Number
                </SortModalContent>
                <SortModalContent activeclassname="active" onClick={props.sort5}>
                    Value
                </SortModalContent>
            </SortModalWrapper>
        </>
    );
};

export default SortModal;
