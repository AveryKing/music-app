import React from 'react';
import {Fa500Px, FaAcquisitionsIncorporated,  FaPhone} from "react-icons/fa";
import Feature from "./Feature";
import {Box, Icon, SimpleGrid} from "@chakra-ui/react";

function FeatureColumn(props) {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<FaPhone/>}
                    title={'Lifetime Support'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<FaAcquisitionsIncorporated />}
                    title={'Unlimited Donations'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<Fa500Px />} 
                    title={'Instant Delivery'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}

export default FeatureColumn;