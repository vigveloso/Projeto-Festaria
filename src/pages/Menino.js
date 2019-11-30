import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner'
import MeninoBanner from '../assets/images/menino/bannermenino.jpeg';

function Menino(){
    return(
        <div className='menino'>
            <Header headerColor={"colorboy"} />
            <Banner bannerfoto={MeninoBanner} text={"Os meninos vão amar!"} />
        </div>
    )
}
export default Menino;