import React from 'react';
import logo from '../../mrcrow.png';
import './Person.css';

const Person = () => {
    return (
        <div className='mt-4 flex flex-col items-center text-black tex-center'>
            <img className="account-pic rounded-full border-2 border-violet-700" src={logo} alt="" />
            <h3 className="mt-1 text-xl font-semibold"> Shoibal Das</h3>
            <h4 className='text-sm'><i className="fa-regular fa-envelope text-violet-700"></i> : shoibalshantu@gmail.com</h4>
            <div className='mt-2 bg-violet-500 h-20 w-11/12 rounded-lg flex items-center justify-evenly text-white text-lg font-bold'>
                <div>
                    <h4>180 cm</h4>
                    <h6>Height</h6>
                </div>
                <div>
                    <h4>145 lbs</h4>
                    <h6>Weight</h6>
                </div>
                <div>
                    <h4>22 yr</h4>
                    <h6>Age</h6>
                </div>
            </div>
        </div>
    );
};

export default Person;