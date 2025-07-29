import Navbar from "../components/Navbar";
import "../styles/About.css"

export default function About() {
    return (
        <>
          <Navbar />
        <div className="about-container">
          
            <div className="about-content">
                <h3>About Online Fitness Center</h3>
                <p>
                    Welcome to Online Fitness Center — where strength meets brotherhood.
                    Established with the vision of building not just stronger bodies but a stronger community, 
                    Online Fitness Center is a trusted space for fitness enthusiasts of all levels.
                    Whether you're a beginner or a seasoned athlete, our certified trainers,
                    modern equipment, and motivating environment are here to support your fitness journey.
                    At Online Fitness Center, we believe in consistency, discipline, and growth — together.
                    Join us and become a part of a family that lifts each other up, literally and metaphorically.
                </p>

                <hr />

                <h2>Contact Us</h2>
                <p>If you have any questions, feedback, or need support, feel free to contact us:</p>
                <ul>
                    <li><strong>Email:</strong> support@brothersgym.com</li>
                    <li><strong>Phone:</strong> +91-9876543210</li>
                    <li><strong>Address:</strong> Online Fitness Center HQ, 2nd Floor, Mumbai, India</li>
                </ul>
            </div>
        </div>
        </>
    );
}
