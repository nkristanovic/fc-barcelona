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
import stegen from '../../assets/images/stegen.png';

const Cards = () => {
    return (
        <>
            <CardWrapper>
                <Overlay>
                    <Wrapper>
                        <Image src={stegen} alt='Mark-Andre Ter Stegen' />
                    </Wrapper>
                    <Item >
                        <Title>
                            <NumberInfo>1</NumberInfo>
                            <Name>Marc-André ter Stegen</Name>
                        </Title>
                        <Position>GOALKEEPER</Position>
                        <Hidden>
                            <HorizontalLine />
                            <Information>
                                <Info>
                                    <Text>Age</Text>
                                    <Age>35</Age>
                                </Info>
                                <Info>
                                    <Text>Nationality</Text>
                                    <Nationality>German</Nationality>
                                </Info>
                                <Info>
                                    <Text>Value</Text>
                                    <Value>35</Value>
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