import React from 'react';
import GuestHomeNav from "./GuestHomeNav";
import {Container} from "@chakra-ui/react";
import Hero from "./Hero";
import MusicPlatforms from "./MusicPlatforms";
import Signup from "./Signup";

function GuestHome(props) {
    return (
        <>
            <GuestHomeNav />
            <Container maxW={'3xl'}>
                <Hero />
                <br/>
                <MusicPlatforms />
            </Container>
        </>

    );
}

export default GuestHome;