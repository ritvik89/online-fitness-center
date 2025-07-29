import "../styles/Login.css"
import Footer from "../components/Footer"
import { useState } from "react"
import Navbar from "../components/Navbar"


export default function Login() {
  

    let [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData), 
            });
            if (response.ok) {
                localStorage.setItem("userEmail", formData.email);
                alert("Login Successful");
                window.location.href = "/"; // instead of Navigate("/")
            }
            else {
                const errorData = await response.json();
                alert("Login failed: " + errorData.error);
            }
        } catch (err) {
            alert("Server error: " + err.message);
        }
    };
    return (
        <>
         <Navbar />
            <div className="login-card">
                <h1 >login</h1><br />
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email"> Email : </label>
                    <input type="email"
                        id="email"
                        placeholder=" enter email"
                        name="email" value={formData.email}
                        onChange={handleInputChange}
                        required />
                    <br /><br />
                    <label htmlFor="password"> Password : </label>
                    <input type="password"
                        id="password"
                        placeholder=" password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required /><br /><br />
                    <button type="submit">Sign in</button> <br /><br />
                    <p> Don't have an account ? <a href="/signup">signup</a> </p>
                </form>
            </div>
            <Footer />
        </>
    )
}