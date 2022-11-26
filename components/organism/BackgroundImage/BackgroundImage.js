import React from 'react';

import apartmentImage from '../../../public/assets/seinfeld-apartment.jpg';

import { Button, Text } from "components/atoms";
import { Link } from "components/molecules";

import { HeroImageContainer, HeroContent } from "./BackgroundImage.styles";

export const HomeBackground = () => {
    return (
        <HeroImageContainer image={apartmentImage}>
            <HeroContent>
                <Text spacing={4} textAlign="center" type="h1" size="2xl" color="white">Habi</Text>
                <Button color="purple">
                    <Link href="/form/datos-nombres" textAlign="center" color="white">Vender</Link>
                </Button>
            </HeroContent>
        </HeroImageContainer>
    );
};

export default HomeBackground;
