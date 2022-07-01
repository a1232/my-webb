import "./App.css";
import Header from "../component/navigation/pageComponent/header/header";
import Banner from "../component/navigation/pageComponent/banner/banner";
import Cards from "../component/navigation/pageComponent/cards/cards";
import InputList from "../component/navigation/pageComponent/inputList/inputList";

function App() {
  return (
    <div>
      <Header />

      <Banner />
      <InputList />
      <Cards />
    </div>
  );
}

export default App;
