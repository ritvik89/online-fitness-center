import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../styles/AdminDashboard.css";
import gymadminbg from "../Assets/gym-admin-bg.jpg";
import axios from "axios";

export default function AdminDashboard() {
    const [showImage, setShowImage] = useState(true);
    const [totalMembers, setTotalMembers] = useState(null);

    const fetchTotalMembers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/total-members");
            setTotalMembers(response.data.totalMembers);
            setShowImage(false); // hide image
        } catch (err) {
            console.error("Error fetching members:", err);
        }
    };

    // ✅ Reset view to Dashboard (show image)
    const showDashboard = () => {
        setShowImage(true);
        setTotalMembers(null); // remove member count
    };

    return (
        <>
            <Navbar />
            <Sidebar onMembersClick={fetchTotalMembers} onDashboardClick={showDashboard} />
          
            <div className="dashboard-content">
                {showImage ? (
                    <div className="bgImage">
                        <img src={gymadminbg} alt="gym-admin-bg" />
                           <Footer/>
                    </div>
                ) : (
                    <div className="members-data">
                        <h1> <span style={{color:"green"}}> Total Registered Members : </span> {totalMembers}</h1>
                    </div>
                   
                )}
                  
            </div>

         
           
        </>
    );
}
