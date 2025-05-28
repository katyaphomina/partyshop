import React from 'react';
import './App.css';
import {Main, Places} from "./pages";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/partyshop" element={<Main/>} />
                <Route path="/partyshop/places" element={<Places/>} />
            </Routes>
        </>
    );
}


export default App;
