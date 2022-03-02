import React from 'react';
import {Box, HStack} from "@chakra-ui/react";
import {FaSoundcloud, FaSpotify, FaYoutube} from "react-icons/fa";

function MusicPlatforms(props) {
    return (
        <Box>
            <HStack spacing="50px" justifyContent="center">
                <FaSpotify color="#32a852" fontSize={50}/>
                <FaSoundcloud color="#ff8800" fontSize={50}/>
                <FaYoutube color="#c4302b" fontSize={50}/>
            </HStack>

        </Box>
    );
}

export default MusicPlatforms;