import React from 'react';

const Breakperiods = (props) => {
    const { addBreakPeriod } = props;
    return (
        <div>
            <h2 className='mt-4 text-center text-xl text-black font-semibold'>Add a Break</h2>
            <div className="bg-light flex flex-row justify-between p-4">
                <button onClick={() => addBreakPeriod(10)} className='rounded-full bg-violet-100 hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded'>
                    <h5>10</h5>
                </button>
                <button onClick={() => addBreakPeriod(20)} className='rounded-full bg-violet-100 hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded'>
                    <h5>20</h5>
                </button>
                <button onClick={() => addBreakPeriod(30)} className='rounded-full bg-violet-100 hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded'>
                    <h5>30</h5>
                </button>
                <button onClick={() => addBreakPeriod(40)} className='rounded-full bg-violet-100 hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded'>
                    <h5>40</h5>
                </button>
                <button onClick={() => addBreakPeriod(50)} className='rounded-full bg-violet-100 hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded'>
                    <h5>50</h5>
                </button>
            </div>
        </div>
    );
};

export default Breakperiods;