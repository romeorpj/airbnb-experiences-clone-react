import Navbar from "../Navbar/Navbar";
import "./App.css";
import Hero from "../Hero/Hero";
import Lede from "../Lede/Lede";
import Slider from "../Slider/Slider";


function App() {
  return (
		<>
			<Navbar />
			<main>
        <Hero />
        <Lede/>
		  </main>
		  <Slider/>
		</>
	);
}

export default App;
