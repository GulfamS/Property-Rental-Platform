import Header from "../Header"
import "./index.css"

const Home = () =>{
    return(
        <>
        <Header/>
         <div className="home-container">
            <h1 className="home-heading">Easy Rent Your Rentals</h1>
            <p className="home-description">An exquisite penthouse with panoramic city views, private elevator access, and top-of-the-line finishes.</p>
         </div>
        </>
    )
}

export default Home