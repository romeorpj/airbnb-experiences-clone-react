import "../Slider/Slider.css";
import Swimmer from "../../img/swimmer.png";
import Wedding from "../../img/wedding-photography 1.png";
import Bike from "../../img/mountain-bike 1.png";


export default function Slider() {
	return (
		<section className="slider-container">
			<div className="swimmer-card card">
				<img src={Swimmer} alt="swimmer" />
				<div className="details">
					<i class="fa-solid fa-star"></i>
					<span>5.0</span>
					<span>(6) • </span>
					<span>USA</span>
				</div>
				<p>Life Lessons with Katie Zaferes</p>
				<p>
					<span>From $136</span> / person
				</p>
			</div>

			<img src={Wedding} alt="wedding" />
			<img src={Bike} alt="bike" />
		</section>
	);
}
