import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import BannerFoto from '../assets/images/menina/bannermenina.jpeg';

function Menina(){
    return(
        <div className='menina'>
            <Header headerColor={"colorgirl"} />
            <Banner bannerfoto={BannerFoto} text={"As meninas vão amar!"}/> 
        </div>
    )
}
export default Menina;