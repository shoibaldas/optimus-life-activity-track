import React from 'react';
import logo from '../../mrcrow.png';
import './Person.css';

const Person = () => {
    return (
        <div className='mt-4 flex flex-col items-center text-black tex-center'>
            <img className="account-pic rounded-full border-2 border-violet-700" src={logo} alt="" />
            <h3 className="mt-1 text-xl font-semibold"> Shoibal Das</h3>
            <h4 className='text-sm'>Email: shoibalshantu@gmail.com</h4>
            <div className='mt-2 bg-violet-500 h-20 w-full flex items-center justify-evenly text-white text-lg font-bold'>
                <div>
                    <h5>Height: 48cm</h5>
                </div>
                <div>
                    Weight: 479gm
                </div>
                <div>
                    Age: 3 year
                </div>
            </div>
        </div>
    );
};

export default Person;