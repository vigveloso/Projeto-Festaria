import React from 'react';
import Logo from  './Logo';
import Nav from './Nav';
import ModalMenu from './ModalMenu'
import '../../assets/styles/components/header/index.css';

class index extends React.Component{
    render(){
        return(
            <div className={"header " + this.props.headerColor}>
                <h1>{this.props.cardTitle}</h1>
                <Logo />
                <Nav />
                <ModalMenu/>
            </div>
        )
    }
}
export default index;





