import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            setUserEmail(email);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        window.location.href = "/login"; // redirect to login
    };

    return (
        <div>
            <nav className="nav-container">
                <h1>Online Fitness Center</h1>
                <div className="navlink1">
                    <Link to="/">HOME</Link>
                    <Link to="/pricing">PRICING</Link>
                    <Link to="/about">ABOUT</Link>
                </div>

                <div className="navlink2">
                    {userEmail ? (
                        <>
                            <span style={{ color: "white", marginRight: "10px" }}>Welcome : {userEmail}</span>
                            <button style={{ backgroundColor: "red", padding: ".25rem", border: "none", color: "white", cursor: "pointer" }} onClick={handleLogout}>
                                LOGOUT
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={{ backgroundColor: "teal" }}>LOGIN</Link>
                            <Link to="/signup" style={{ backgroundColor: "teal" }} >SIGN UP</Link>

                        </>
                    )}
                </div>
            </nav>
        </div>
    );
}