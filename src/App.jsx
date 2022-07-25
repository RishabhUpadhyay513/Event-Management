import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./Shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import BookEvent from "./Components/BookEvent";
import PagenotFound from "./Components/PagenotFound";
import Users from "./Components/Users";
import Details from "./Components/Details";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditUser from "./Components/EditUser";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/bookevent" element={<BookEvent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/Details/:id" element={<Details />} />
                    <Route path="/editUser/:id" element={<EditUser />} />
                    <Route path="*" element={<PagenotFound />} />
                   
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
