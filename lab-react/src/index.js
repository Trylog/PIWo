import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { RecordProvider } from "./Assets/records";
import Home from './pages/Home';
//import AddNewOffer from './pages/Tester';
import AddNewOffer from './pages/AddNewOffer'
import HotelPage from './pages/hotelPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
    return (
      <RecordProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotelPage" element={<HotelPage/>}/>
            <Route path="/addNewOffer" element={<PrivateRoute><AddNewOffer /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </RecordProvider>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);