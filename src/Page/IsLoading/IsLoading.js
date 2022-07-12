import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './IsLoading.css'
import {  BallTriangle } from  'react-loader-spinner'
const IsLoading = () => {
    
    return (
       <div className='spinner-head d-flex justify-content-center  align-items-center'>
        <BallTriangle color="#00BFFF" height={100} width={100} />
       </div>
    );
};

export default IsLoading;