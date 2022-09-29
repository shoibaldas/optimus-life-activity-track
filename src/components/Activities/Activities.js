import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Breakperiods from '../Breakperiods/Breakperiods';
import History from '../History/History';
import Person from '../Person/Person';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [timeSpended, setTimeSpended] = useState([0]);
    const id = localStorage.getItem('breakPeriod');
    const [timeBreak, setTimeBreak] = useState([id]);


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addBreakPeriod = (value) => {
        const newBreakPeriod = value;
        setTimeBreak(newBreakPeriod);
        localStorage.setItem('breakPeriod', newBreakPeriod);

    }

    const addBreakTime = (value) => {
        const newBreakTime = parseInt(timeSpended) + value;
        setTimeSpended(newBreakTime);
    }

    return (
        <div className="mt-20 container mx-auto ml-8 flex flex-row justify-center manrope-font">
            <div className="w-4/6">
                <div className="grid grid-cols-3 gap-y-10">
                    {/*  */}
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            addBreakTime={addBreakTime}
                        ></Activity>)
                    }
                </div>
            </div>

            <div className="w-2/6">
                <div className="grid gap-y-10">
                    <div className="w-96 h-auto mb-8 bg-gray-300 rounded overflow-hidden shadow-lg">

                        <Person></Person>
                        <Breakperiods
                            addBreakPeriod={addBreakPeriod}
                        ></Breakperiods>
                        <History
                            timeSpended={timeSpended}
                            timeBreak={timeBreak}
                        ></History>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;