import {
    BrowserRouter, Navigate,
    Route,
    Routes
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import De from "./Contact/De";
import Pl from "./Contact/Pl";
import Us from "./Contact/Us";

import Services from "./Services";
import Nav from "./Nav";

import NotFound from "./NotFound";
function App() {
  return (
      <>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}>
                    <Route path="de" element={<De/>}/>
                    <Route path="pl" element={<Pl/>}/>
                    <Route path="us" element={<Us/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
