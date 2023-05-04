import React from "react";
import  ReactDOM  from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import External from "./components/ExternalCss";
import './style.css'; 

const root=ReactDOM.createRoot(document.getElementById("external_style_demo"));
root.render(
    //This <External /> is Function name import From ExternakCss.js Component
    <External />
)




reportWebVitals();