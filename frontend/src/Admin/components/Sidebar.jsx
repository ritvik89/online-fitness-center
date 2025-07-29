import "../styles/Sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar({ onMembersClick, onDashboardClick }) {
    return (
        <>
            <div className="sidebar-div">
                <div className="dashboard">
                    <h2>
                        <Link to="/adminDashboard" onClick={onDashboardClick}>
                            <i className="fa-solid fa-gauge"></i> Dashboard
                        </Link>
                    </h2>
                </div>
                <div className="content">
                    <ul>
                        <li className="members-item" onClick={onMembersClick}>
                            Members <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="members-item">
                            Membership <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="members-item">
                            Package <i className="fa-solid fa-arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
