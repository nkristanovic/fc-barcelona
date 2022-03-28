import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SectionContent } from '../../lib/style/generalStyles';
import {
    SectionHero,
    Overlay,
    Content,
    Heading,
    Subheading
} from './HeroStyle';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <SectionHero>
            <Overlay>
                <SectionContent>
                    <Content>
                        <Heading>FC Barcelona team</Heading>
                        <Subheading>
                            Respect, effort, ambition, teamwork and humility are the five principal values that define the spirit of FC Barcelona. Our team is one of the greatest in the world. Check out our players!</Subheading>
                        <PrimaryButton onClick={() => navigate('/team')} text='Team' />
                    </Content>
                </SectionContent>
            </Overlay>
        </SectionHero>
    );
}

export default Hero;