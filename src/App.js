import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuPage from './page/MenuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: "lightblue", padding: "70px 200px" }}
      >
        <MenuPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
