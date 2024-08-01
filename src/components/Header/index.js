import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>{
    return (
        <div className="nav-header">
            <div className="nav-content">
                <img alt="logo" className="logo" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOOAJjmbUdsTB2mkqqeyE61Vrka5bj4y-fYcb4BpGrFGqiHcP8" />
                <div>
                <ul className="nav-menu">
                    <Link to="/" className="nav-link">
                    <li className="nav-menu-item first">                  
                        Home              
                    </li>
                    </Link>
                    <Link to="/bookahome" className="nav-link">
                    <li className="nav-menu-item second">                  
                        BookaHome              
                    </li>
                    </Link>
                    <Link to="/cart" className="nav-link"> 
                    <li className="nav-menu-item">                
                        Cart
                    </li>
                    </Link>
                </ul>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header