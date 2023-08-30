import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Products from './Components/Products';
import Reviews from './Components/Reviews';
import storeData from './Data/Data';


function App() {
  return (
    <div >
      <h1>App Component</h1>
      <Home storeimage = {storeData.shop_image} storename={storeData.storename}/>
      <About />
      <ContactUs />
      <Products />
      <Reviews />

    </div>
  );
}

export default App;
