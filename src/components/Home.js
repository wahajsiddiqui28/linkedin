import React, { useState } from 'react';
import Leftside_component from "./HomeComponents/Leftside_component";
import Rightside_component from "./HomeComponents/Rightside_component";
import Middle_component from "./HomeComponents/Middle_component";

function Home() {
    const [color, setColor] = useState("wahaj siddiqui");

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <Leftside_component/>
                </div>
                <div className='col-lg-3'>
                    <Middle_component/>
                </div>
                <div className='col-lg-3'>
                    <Rightside_component/>
                </div>
            </div>
            <div className="card mb-3 mt-5">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Home</h5>
                    <p className="card-text"> Home HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
            <div className='container'>
                <div>Home {color} </div>
                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>
            </div>
        </>
    )
}

export default Home