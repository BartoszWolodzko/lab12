import React,{useState} from "react";
import {BrowserRouter as Router, Route, Na, Routes} from "react-router-dom";
import Sub from "./components/Sub";
import Mul from "./components/Mul";
import Div from "./components/Div";
import Add from "./components/Add";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/add" element={<Add/>}/>
                <Route path="/sub" element={<Sub/>}/>
                <Route path="/mul" element={<Mul/>}/>
                <Route path="/div" element={<Div/>}/>
            </Routes>
        </Router>
    );
}

export default App;
