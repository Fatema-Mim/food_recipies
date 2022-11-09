import { motion } from 'framer-motion';
import React from 'react';
import Popular from '../components/Popular';
import Veggi from '../components/Veggi';


const Home = () => {
    return (
        <motion.div
            animate={{ opacity:1 }}
            initial={{ opacity:0 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.5 }}
        >
            <Popular />
            <Veggi />
        </motion.div>
    );
};

export default Home;