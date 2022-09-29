import React from 'react';


const Activity = (props) => {
    const { name, time, picture } = props.activity;
    return (
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-400">
            <a href="/">
                <img className="rounded-t-lg w-full h-48" src={picture} alt="" />
            </a>
            <div className="p-5">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 text-sm text-black dark:text-black font-semibold">Time: {time} min</p>
                <button onClick={() => props.addBreakTime(time)} className="inline-flex items-center py-2 px-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-violet-800 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                    Add<span className='mx-2'>&rarr;</span>
                </button>
            </div>
        </div>

    );
};

export default Activity;