import Header from "./components/Header/Header.jsx";
import CoreConceptList from "./components/CoreConceptList.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <CoreConceptList />
      <main>
        <Examples />
      </main>
    </div>
  );
}

export default App;
