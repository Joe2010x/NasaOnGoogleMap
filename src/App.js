import MapG from "./components/MapG";
import Events from "./components/y77d-th95.json";

function App() {

  return (
    <div className="App">
    {/* header of this assignment  */}
    <h1>Demo: Nasa's meteor data on Google Map</h1>
  

     {/* main body of Google map with markers plus info window */}
     {/* pass json object to google map through props */}
       <MapG eventData={Events}/>
     
    </div>
  );
}

export default App;
