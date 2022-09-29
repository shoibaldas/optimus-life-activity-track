import React from 'react';

const History = (props) => {
    const { timeSpended, timeBreak } = props;
    return (
        <div className='mt-4 text-center text-black text-lg '>
            <h4 className='font-semibold mb-4'>Activity History</h4>
            <div className='rounded-lg w-11/12 mx-4 bg-violet-500 mb-8 p-4 text-white font-semibold'>
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