import React from 'react';

const Activity = (props) => {
    const { name, time, picture } = props.activity;
    return (
        // <div className="w-4/5 h-80 bg-gray-200 border border-gray-600 rounded overflow-hidden shadow-lg">
        //     <img className="w-72 h-36" src={picture} alt="" />
        //     <div className="flex flex-col justify-center items-center text-black">
        //         <h2 className="text-2xl font-medium mt-4 mb-2">{name}</h2>
        //         <h6 className='mb-6' >Time: {time} min</h6>
        //         <button
        //             className="bg-violet-800 font-semibold rounded px-16 py-2 mb-4 text-center text-white"
        //             onClick={() => props.addBreakTime(time)}>Add</button>
        //     </div>
        // </div>
        <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800">
            <a href="#">
                <img class="rounded-t-lg w-full h-48" src={picture} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Time: {time} min</p>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add
                </a>
            </div>
        </div>

    );
};

export default Activity;