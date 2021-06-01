import './App.css';
import MasterPage from './MasterPage.jsx';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MasterPage />
    </BrowserRouter>
  );
}

export default App;
