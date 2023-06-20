import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import AllUsers from '../Components/AllUsers';

const Home = () => {
    return (
        <>
            <NavBar />
            {/* <Banner/> */}
            <>
            <AllUsers/>
            </>
            <Footer />
        </>
    );
};

export default Home;