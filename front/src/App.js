import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Completed from './components/Completed';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          {/* <Route path="/proceeding" element={<Proceeding />}/>
          <Route path="/important" element={<Important />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
