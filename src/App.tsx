import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div>Curators.com</div>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;