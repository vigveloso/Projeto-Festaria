import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import BannerFoto from '../assets/images/casamento/bannercasamento.jpeg';

function Casamento(){
    return(
        <div className='casamento'>
            <Header headerColor={"colorwedding"} />
            <Banner bannerfoto={BannerFoto} text={"Casamento de novela"}/> 
        </div>
    )
}
export default Casamento;