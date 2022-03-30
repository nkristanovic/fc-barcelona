import React from 'react';
import {
    Card as CardWrapper,
    Image,
    Item,
    Title,
    NumberInfo,
    Name,
    Position,
    Text,
    Overlay,
    HorizontalLine,
    Hidden,
    Information,
    Info,
    Age,
    Nationality,
    Value,
    Wrapper
} from './CardsStyle';

const Cards = (
    {
        img,
        alt,
        numberInfo,
        name,
        position,
        age,
        nationality,
        value
    }) => {
    return (
        <>
            <CardWrapper>
                <Overlay>
                    <Wrapper>
                        <Image src={img} alt={alt} />
                    </Wrapper>
                    <Item >
                        <Title>
                            <NumberInfo>{numberInfo}</NumberInfo>
                            <Name>{name}</Name>
                        </Title>
                        <Position>{position}</Position>
                        <Hidden>
                            <HorizontalLine />
                            <Information>
                                <Info>
                                    <Text>Age</Text>
                                    <Age>{age}</Age>
                                </Info>
                                <Info>
                                    <Text>Nationality</Text>
                                    <Nationality>{nationality}</Nationality>
                                </Info>
                                <Info>
                                    <Text>Value</Text>
                                    <Value>€{value}m</Value>
                                </Info>
                            </Information>
                        </Hidden>
                    </Item>
                </Overlay>
            </CardWrapper>
        </>
    );
}

export default Cards;