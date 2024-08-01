import {BsFilterRight} from 'react-icons/bs'
import "./index.css"

const PropertyHeader = () =>{
    return(
        <div className='property-header'>
            <h1>All Properties</h1>
            <div className='sort-container'>
            <BsFilterRight className='sort-icon'/>
            <p className='sort-by'>Sort by</p>
            <div>
            <select className='select'>
                <option>
                    <p>number of bedrooms</p>
                </option>
            </select>
            </div>
            </div>
        </div>
    )
}  

export default PropertyHeader