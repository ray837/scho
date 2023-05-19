import React, { useEffect ,useState} from "react";
import {  useParams } from "react-router-dom";
export default function Sub() {
    const { id } = useParams(); 
 

    return(<>
    <h3>submitted application <span style={{color:"green"}}>Successfully</span> </h3>
    <h2>{id}</h2>
 </>);}
