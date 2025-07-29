import { useEffect, useState } from "react"
import "../styles/Navbar.css"
export default function Navbar() {
    const [adminEmail, setAdminEmail] = useState(null);


    useEffect(() => {
        const email = localStorage.getItem("adminEmail");
        if (email) {
            setAdminEmail(email);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminEmail");
        window.location.href = "/admin";
    }

    return (
        <>
            <div className="admin-navbar">
                <h2 > Online Fitness Center </h2>
                <div className="admin-nav-div">
                    {adminEmail ? (
                        <>
                            <div className="admin-nav-right">
                                <span style={{ color: "white", }}> Welcome : {adminEmail}</span>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <a href="/admin"> are you login ?</a>
                    )}

                </div>
            </div>

        </>
    )
}