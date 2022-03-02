import {
    Box,
    HStack,
    Button,
    Spacer,
    Link,
    Text,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Heading,
    Flex,
    Container, IconButton
} from '@chakra-ui/react';
import {FaSoundcloud, FaSpotify, FaYoutube} from "react-icons/fa";
import {motion} from "framer-motion";
import GuestHomeNav from "./components/GuestHomeNav";
import Hero from "./components/Hero";
import FeatureColumn from "./components/FeatureColumn";
import MusicPlatforms from "./components/MusicPlatforms";
import Signup from "./components/Signup";
import {Route, Routes} from 'react-router-dom';
import GuestHome from "./components/GuestHome";
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GuestHome />} exact />
                <Route path='/signup' element={<Signup/>} />
            </Routes>

        </>
    );
}



export default App;
