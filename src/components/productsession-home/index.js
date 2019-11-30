import React from 'react';
import Card from '../card';
import '../../assets/styles/components/productsession/index.css';

import Foto1 from '../../assets/images/casamento/casamento1.jpg';
import Foto2 from '../../assets/images/menina/menina1.jpg';
import Foto3 from '../../assets/images/menino/menino1.jpg';

class index extends React.Component{
    render(){

        var cardData=[{"cardTitle": "Casamento", "cardFoto": Foto1}, 
                    {"cardTitle": "Festa de meninas", "cardFoto": Foto2},
                    {"cardTitle": "Festa de meninos", "cardFoto": Foto3}]
        
        return(
            <div className="productsSection">
                <h1>{this.props.sectionTitle}</h1>
                <div className="cardContainer">
                    { cardData.map((val, i) => (
                    <Card key={i} cardFoto={val.cardFoto} cardTitle={val.cardTitle} />
                    ))}
                </div>
            </div>
            
        )

    }
}
export default index;