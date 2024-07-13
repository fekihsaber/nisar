import {Route, Routes, Link} from 'react-router-dom'
import MyFunctionComponent from './first'
import { MysecondComponent, MyFunction} from './first'
function App() {
  return (
    <div className="App">
      <ul>

        <li><Link to="/">1</Link></li>
        <li><Link to="/a">2</Link></li>
        <li><Link to="/b">3</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<MyFunctionComponent />} />
        <Route path="/a" element={<MysecondComponent />} />
        <Route path="/b" element={<MyFunction />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
