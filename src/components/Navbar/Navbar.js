import "../Navbar/Navbar.css";
import AirBnbLogo from "../../img/LOGO.png";

export default function Navbar() {
	return (
		<nav className="nav-container">
			<img src={AirBnbLogo} alt="airbnb logo" />
		</nav>
	);
}
