import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import BannerFoto from '../assets/images/bannergeral.jpeg';
import ProductSession from '../components/productsession-home';

function Home(){
    return(
        <div className='home'>
            <Header headerColor={"colorhome"} />
            <Banner bannerfoto={BannerFoto} text={"As melhores decorações de São Paulo!"}/> 
            <ProductSession sectionTitle={"Conheça nossos temas:"}/>
        </div>
    )
}
export default Home;