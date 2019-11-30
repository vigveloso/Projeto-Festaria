import React from 'react';
import Button from './Button';
import '../../assets/styles/components/card/index.css';

class index extends React.Component{
    render(){
        return(
            <div className='cardProduct'>
                <h3 className="cardTitle"> {this.props.cardTitle}</h3>
                <img className="imageProduct" src={this.props.cardFoto}/>
                <Button />
            </div>
        )
    }
}
export default index;