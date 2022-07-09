import "../Hero/Hero.css";
import HeroGroupImg from "../../img/Group 77.png";

export default function Hero() {
	return (
		<section className="hero-container">
			<img src={HeroGroupImg} alt="airbnb" />
		</section>
	);
}
