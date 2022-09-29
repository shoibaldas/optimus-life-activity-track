import React from 'react';

const Activity = (props) => {
    const { name, time, picture } = props.activity;
    return (
        <div className="w-4/5 h-80 bg-gray-200 border border-gray-600 rounded overflow-hidden shadow-lg">
            <img className="w-72 h-36" src={picture} alt="" />
            <div className="flex flex-col justify-center items-center text-black">
                <h2 className="text-2xl font-medium mt-4 mb-2">{name}</h2>
                <h6 className='mb-6' >Time: {time}</h6>
                <button
                    className="bg-violet-800 font-semibold rounded px-16 py-2 mb-4 text-center text-white"
                    onClick={() => props.addBreakTime(time)}>Add</button>
            </div>
        </div>

    );
};

export default Activity;