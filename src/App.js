import './App.css';
import Weather_nav from './Weather_nav'
// import Weather_head from './Weather_head'
import Weatherbody from './Weatherbody';
// import First_sec from './First_sec';
// import Navbar from './Navbar';



function App() {
  return (
    <div className="App">
      <Weather_nav/>
      <Weatherbody/>

     {/* <Navbar/>
     <First_sec head="Trending Now" description="Hey i am description" src="./Images/mainImg.jpg"/>
     <First_sec head="Home Decor" description="All new trending home decor" src="./Images/ikea.jpg"/> */}    

    </div>
  );
}

export default App;
