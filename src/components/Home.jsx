import banner from '../assets/home-image.png'
import Banner from '../shared/Banner';
const Home = () => {

  return (
    <div className="md:px-10 p-4 max-w-screen-2xl mx-auto mt-20" id='home' >
      <Banner banner={banner} heading="Welcome to eBye – where tech meets sustainability!"
      subheading="We're your go-to hub for responsibly disposing of outdated hardware, earning carbon credits in the process. Need quality spare parts or eco-friendly alternatives? Look no further. Join us in shaping a greener future, one smart choice at a time."
      btn1="Sell" btn2="Purchase"/>
    </div>  
  );
};

export default Home;
