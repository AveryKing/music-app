import React from 'react';
import {Box, Button, Heading, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function Hero(props) {
    const MotionHeading = motion(Heading);
    const MotionText = motion(Text);
    const MotionButton = motion(Button);
    return (
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 10, md: 10}}>
            <MotionHeading
                initial={{opacity:0}}
                animate={{opacity:1}}

                mb={{base: -5, md: -10}}
                fontWeight={600}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'}>
                All of your music,<br/>in&nbsp;
                <Text as={'span'} color={'purple.300'}>
                    one place
                </Text>
            </MotionHeading>
            <MotionText color={'gray.500'} fontSize={{md: '20'}}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
            </MotionText>
            <Stack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Link to='/signup'>
                    <MotionButton
                        initial={{opacity:0}}
                        animate={{opacity:1}}

                        bg={'purple.500'}
                        rounded={'full'}
                        px={6}
                        _hover={{
                            bg: 'purple.600',
                        }}>
                        Create An Account
                    </MotionButton>
                </Link>

                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>

                </Button>

            </Stack>
        </Stack>
    );
}

export default Hero;