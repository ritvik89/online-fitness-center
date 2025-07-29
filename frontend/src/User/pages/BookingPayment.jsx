import { useNavigate } from "react-router-dom";
import "../styles/BookingPayment.css";


export default function BookingPayment() {
    const navigate = useNavigate();

    const handlePayment = () => {
        const name = document.getElementById("name").value.trim();
        const amount = document.getElementById("number").value.trim();
        const cardNumber = document.querySelector('input[type="number"][minLength="12"]').value.trim();

        if (!name || !amount || cardNumber.length < 12) {
            alert("Please fill in all required fields correctly.");
            return;
        }

        alert("Payment successful !!");
        navigate("/");
    };

    return (
        <> 
      
        <div className="booking-container">
            <h1 className="booking-main-heading" >Booking Confirmation</h1>
            <div className="bookingPayment-container">
                <label  htmlFor="name">Name : </label>
                <input type="text" id="name" />

                <label   htmlFor="number">Amount : </label>
                <input  type="number" id="number" />

                <p>Payment Method : Credit/Debit Card</p>
                <input  className="booking-input" type="number" minLength={12} />

                <button onClick={handlePayment}>
                    Pay Now
                </button>
            </div>
             </div>
        </>
    );
}