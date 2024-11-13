import "./App.css";

import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor.jsx';

function App() {
  return (
    <div className="App">
      <h1>Id Cards</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />


      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">John</Greetings>

      <h2>Random Numbers</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>Box Colors</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
    
    
  );
}

export default App;