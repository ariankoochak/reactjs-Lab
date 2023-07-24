import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Users from "./routes/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Setting from "./routes/Setting/Setting";
export default function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />}>
                        <Route path=":userId" element={<UserDetails />} />
                    </Route>
                    <Route path="/setting" element={<Setting />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
