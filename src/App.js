import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <Weather />
      <footer>
        <a href="https://github.com/JessCardenas?tab=repositories">
          Open-source
        </a>{" "}
        code by <a href="https://github.com/JessCardenas">Jessica Cárdenas</a>
      </footer>
    </div>
  );
}

export default App;
