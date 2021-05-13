import MapG from "./components/MapG";
import Events from "./components/y77d-th95.json";

function App() {

  return (
    <div className="App">
    {/* header of this assignment  */}
    <h1>Assignment 4 Nasa</h1>
    <img src="https://usercontent.one/wp/bothofus.se/wp-content/uploads/2019/06/cropped-bou-logo-3.png" alt></img>
     <h2>Joe Sun</h2>

     {/* main body of Google map with markers plus info window */}
     {/* pass json object to google map through props */}
       <MapG eventData={Events}/>
     
    </div>
  );
}

export default App;
