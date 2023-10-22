import AboutUs from "../Components/AboutUs";
import Products from "../Components/Products";
import Services from "../Components/Services";
import Slider from "../Components/Slider";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <Services />
      <Products />
      <Team />
    </div>
  );
};

export default Home;
