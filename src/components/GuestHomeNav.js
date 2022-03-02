import React from 'react';
import {Button, HStack, Link, Spacer} from "@chakra-ui/react";

function GuestHomeNav(props) {
    return (
        <HStack m={3} spacing="15px">
            <Spacer/>
            <Link>Get The App</Link>
            <Button

                bg={'purple.500'}
                rounded={'full'}
                px={6}
                _hover={{
                    bg: 'purple.600',
                }}>
                Sign In
            </Button>
        </HStack>
    );
}

export default GuestHomeNav;