import React from 'react';

const History = (props) => {
    const { timeSpended, timeBreak } = props;
    return (
        <div className='mt-4 text-center text-black text-lg '>
            <h4 className='font-semibold mb-2'>Activity History</h4>
            <div className='bg-violet-500 mb-8 p-4 text-gray-700 font-semibold'>
                <div>
                    <h5>Time Spended(total.) : {timeSpended} min</h5>
                </div>
                <div>
                    <h5>Break Time: {timeBreak} min</h5>
                </div>
            </div>
        </div>
    );
};

export default History;