import Dicionary from "./components/Dicionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dicionary defaultKeyword="aesthetic"/>
        </main>
        <footer className="mt-5 footer">
          <p className="m-0 credit text-red-900">Coded by <a href="https://github.com/jankoabel" target="_blank"> Abel Janko.</a>, 
          <a href="https://github.com/abrshewube/English_Dictionary" target="_blank">Open sourced on Github.</a> 
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
