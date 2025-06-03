import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar
        logo={"../src/assets/viaje-de-negocios.png"}
        brand={"Sumatra"}
      ></Navbar>

      <ItemListContainer saludo={"¡Bienvenidos a Sumatra, viajar soñando!"} />
    </>
  );
}

export default App;
