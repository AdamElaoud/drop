import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import ToDos from './pages/ToDos';
import './App.scss';
import { useEffect } from 'react';
import BasePage from './pages/BasePage';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // check login status
        const loginStatus = localStorage.getItem("isLoggedIn");

        if (loginStatus === "true") {
            // route to dashboard
            navigate("/todos", { replace: true });
            
        } else {
            // route to login page
            navigate("/login", { replace: true });
        }

    }, [navigate]);

  return (
    <main className = "App">
        <Routes>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/todos" element = {<BasePage><ToDos/></BasePage>}/>
        </Routes>
    </main>
  );
}

export default App;
