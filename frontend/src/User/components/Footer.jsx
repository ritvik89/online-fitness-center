import "../styles/Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        < >
            <div className="footer">
                <div className="footer-info">
                    <h4> CUSTOMER SERVICE</h4>
                    <div >
                        <Link to="/login">Account Login</Link><br />
                        <Link to="/about"> About Us</Link>
                    </div>
                </div >
                <div className="footer-info">
                    <h4> FOLLOW </h4><br />
                    <div>
                        <Link to="https://facebook.com">
                            <i className="fab fa-facebook-f"></i>
                        </Link > &nbsp;
                        <Link to="https://instagram.com">
                            <i className="fab fa-instagram"></i>
                        </Link > &nbsp;
                        <Link to="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </Link > &nbsp;
                        <Link to="https://google.com">
                            <i className="fab fa-google"></i>
                        </Link > &nbsp;
                    </div>
                </div>
                <div className="footer-info">
                    <h4> CONTACT US</h4>
                    <div >
                        <Link to="#"> <p><i className="fa-solid fa-phone"></i> +91 9876543210 | <i className="fa-solid fa-envelope"></i> support@fitness.com</p></Link >
                        <Link to="#"> <p><i className="fa-solid fa-location-dot"></i> Online Fitness Center, 2nd Floor , Nagpur , India</p></Link >
                    </div>
                </div >
                <p> Develop by  Ritvik <br /> @ 2025</p>
            </div>
        </>
    )
}