import "../styles/Pricing.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"


export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className="adjustment-for-footer">

            <div className="package-upper-text">
                <h2>CHOOSE YOUR PLANS</h2>
                <p>Practice gym to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
            <br /><br />
            <div className="rk-style">
            <div className="package-container">
                <div className="package-container-heading">
                    <h4> FITNESS GEAR PACKAGE </h4>
                    <p> fitness gear complimentry pass</p>
                </div>
                <div className="package-container-price">
                    <h1> ₹600 </h1>
                    <p> 1 MONTH </p>
                </div>
                <div className="package-container-btn">
                    <Link to="/BookingPayment">BOOKING NOW</Link>
                </div>
            </div>
              <div className="package-container">
                <div className="package-container-heading">
                    <h4>MEMBERSHIP PACKAGE</h4>
                    <p>valuable offer for you</p>
                </div>
                <div className="package-container-price">
                    <h1> ₹1200 </h1>
                    <p> 3 MONTHS </p>
                </div>
                <div className="package-container-btn">
                    <Link to="/BookingPayment">BOOKING NOW</Link>
                </div>
            </div>
              </div>
          
            </div>
              <Footer/>
            

        </>
    )
}