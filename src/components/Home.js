import React from 'react';
import Leftside_component from "./HomeComponents/Leftside_component";
import Rightside_component from "./HomeComponents/Rightside_component";
import Center from './HomeComponents/Center';

function Home() {

    return (
        <>
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-lg-3'>
                    <Leftside_component/>
                </div>
                <div className='col-lg-6'>
                    <Center/>
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
        
        </>
    )
}

export default Home