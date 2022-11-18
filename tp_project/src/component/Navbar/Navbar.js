import { logDOM } from '@testing-library/react'
import React, { Component } from 'react'
import { Button } from '../Button'
import{MenuItems} from './MenuItems'
import './Navbar.css'


class Navbar extends Component{
    state ={clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className='navigation'>
            <nav className='NavbarItems'>
                
                <h1 className='navbar-logo'> <img classname='icon_img' src={'/icon.png'} height={120} ></img> <i className='fab fa-react'>
                    </i>
                    <intput type="text" placeholder = "Search.."></intput>
                    </h1>   
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul  className= {this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key ={index}>
                                <a className={item.cName} href={item.url}>
                                    <img src={item.src} alt='not found' height={40}></img>
                                {/* {item.title} */}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                
            </nav>
            </div>
        )
          
    }
}
export default Navbar