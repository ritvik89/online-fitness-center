import "../styles/Signup.css"
import Footer from "../components/Footer"
import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Signup() {
   const Navigate=useNavigate();

    let [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        contact: "",
        email: "",
        password: "",
    });

    let handleInputChange = (event) => {
     
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData);
    //     setFormData({
    //     firstname: "",
    //     lastname: "",
    //     age: "",
    //     gender: "",
    //     contact: "",
    //     email: "",
    //     password: "",
    // });
    // }

    let handleSubmit = async (event) => {
  event.preventDefault();

  try {
    let response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Signup successful!");
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        contact: "",
        email: "",
        password: "",
      });
      Navigate("/login")
    } else {
      const errorData = await response.json();
      alert("Signup failed: " + errorData.error);
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
};



    return (
        <>
         <Navbar />
            <div className="box">
                <h2>Create an Account</h2> <br />
                <form action="#" className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name : </label>
                    <input type="text" id="firstname" placeholder=" enter firstname" name="firstname" value={formData.firstname} onChange={handleInputChange}required  /> <br /><br />
                    <label htmlFor="lastname">Last Name : </label>
                    <input type="text" id="lastname" placeholder=" enter lastname" name="lastname" value={formData.lastname} onChange={handleInputChange}required  /> <br /><br />
                    <label htmlFor="age">Age : </label>
                    <input type="number" id="age" placeholder=" enter age" name="age" value={formData.age} onChange={handleInputChange} required />&nbsp;&nbsp;
                    <label htmlFor="gender">gender : </label>
                    <select name="gender" id="gender" value={formData.gender} onChange={handleInputChange} required >
                        <option >Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />
                    <label htmlFor="contact">contact : </label>
                    <input type="tel" id="contact" placeholder=" enter a number" name="contact" value={formData.contact} onChange={handleInputChange}required  /> <br /><br />
                    <label htmlFor="email">E-mail : </label>
                    <input type="email" id="email" placeholder=" enter a email" name="email" value={formData.email} onChange={handleInputChange} required /> <br /><br />
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" placeholder=" enter password" name="password" value={formData.password} onChange={handleInputChange}  required minLength={6}/><br /><br />
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox"> term and condition apply </label>
                    <br /><br />
                    <button type="submit" > SignUp </button><br /><br />
                    <p>already have an account ? <a href="/login">Login</a></p> <br />
                </form>
            </div>
            <Footer />

        </>
    )
}