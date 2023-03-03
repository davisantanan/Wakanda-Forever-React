import React from "react";
import Header from "../../components/header/header";
import Cards from "../../components/cards/cards";
import Banner from "../../components/banner/banner";
import Trailer from "../../components/trailer/trailer";
import Footer from "../../components/footer/footer";
import './styles.css';


function Home () {

    return (
        <>
            <Header />
            <Banner />
            <Trailer />
            <Cards />
            <Footer />        
        </>
    )
}

export default Home;