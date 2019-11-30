import React from 'react';
import '../../assets/styles/components/banner/index.css';

class Banner extends React.Component{
    render(){
        return(
        <div className="banner">
            <img className="imagebanner" src={this.props.bannerfoto}/>
            <div className="textbanner">
                <h2>{this.props.text}</h2>
            </div>
        </div>
        )
    }
}
export default Banner;