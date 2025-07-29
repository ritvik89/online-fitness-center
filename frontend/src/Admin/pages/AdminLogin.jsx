import "../styles/AdminLogin.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer"
export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/admin/login", {
        email,
        password
      });

      alert(res.data.message);

      // ✅ Save login info in localStorage
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminEmail", email);

      window.location.href = "/adminDashboard";
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="adminLogin">
        <form className="adminLogin-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2><br /><br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button type="submit">Login</button>
        </form>
      </div>
     <div className="ad-fr">
       <Footer/>

     </div>
     
    </>
  );
}