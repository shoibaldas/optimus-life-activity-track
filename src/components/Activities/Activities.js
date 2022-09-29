import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Breakperiods from '../Breakperiods/Breakperiods';
import History from '../History/History';
import Person from '../Person/Person';

//tostify-import
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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

    //const notify = () => toast("Wow so easy!");

    return (
        <div >
            <div className='mt-20 container mx-auto ml-8 flex flex-row justify-center'>
                <div className="w-8/12">

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                addBreakTime={addBreakTime}
                            ></Activity>)
                        }
                    </div>

                </div>

                <div className="w-4/12">
                    <div className="mx-8">
                        <div className="w-96 h-auto mb-8 bg-gray-300 rounded overflow-hidden shadow-lg">

                            <Person></Person>
                            <Breakperiods
                                addBreakPeriod={addBreakPeriod}
                            ></Breakperiods>
                            <History
                                timeSpended={timeSpended}
                                timeBreak={timeBreak}
                            ></History>
                            <div className='flex justify-center'>
                                {/* <button
                                className="bg-violet-800 font-semibold rounded px-16 py-2 mb-4 text-center text-white"
                                onClick={notify}>Complete Activity</button>\ */}
                                {/* <ToastContainer /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex flex-col justify-center items-center gap-4'>
                <h1 className='text-3xl mb-8 text-violet-700 font-bold'>Blog.</h1>
                <div
                    className="max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How does react Work?</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">  React is a JavaScript library for creating user interfaces that is declarative, fast, and customizable. In MVC, the 'V' represents the view. ReactJS is an open-source, component-based front end library that is exclusively responsible for the application's display layer. <br />
                            <span className='font-bold'>How Does it Work: </span>
                            While developing client-side apps, a team of Facebook engineers discovered that the DOM (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It outlines the logical structure of documents as well as how they are accessed and altered.) To make things quicker, React provides a virtual DOM, which is essentially a DOM tree representation in JavaScript. When it wants to read or write to the DOM, it will utilize the virtual version of it. The virtual DOM will then try to determine the most effective way to update the browser's DOM. React elements, unlike browser DOM elements, are simple objects that are inexpensive to construct. The DOM is updated to match the React elements using React DOM. This is because JavaScript is extremely fast, and it is worthwhile to have a DOM tree in it to speed up its operation.
                        </p>
                    </div>
                </div>
                <div
                    className="max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Difference between Props and State.</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 underline underline-offset-4"><span className='font-bold'>Props</span> are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. </p>
                        <ol className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>The Data is passed from one component to another.</li>
                            <li>It is Immutable (cannot be modified).</li>
                            <li>Props can be used with state and functional components.</li>
                            <li>Props are read-only.</li>
                        </ol>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 underline underline-offset-4">The <span className='font-bold'>state</span> represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
                        <ol className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>The Data is passed within the component only.</li>
                            <li>The Data is passed within the component only.</li>
                            <li>State can be used only with the state components/class component (Before 16.0).</li>
                            <li>State is both read and write.</li>
                        </ol>
                    </div>
                </div>
                <div
                    className="max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UseEffect Api is used for other purposes than loading data?</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.callback argument is a function to put the side-effect logic.dependencies is a list of dependencies of your side-effect: being props or state values. The purpose of the useEffect Hook is to eliminate the side effects of employing class-based components. For example, operations like as changing the DOM, retrieving data from API endpoints, configuring subscriptions or timers, and so on might have unintended consequences. </p>
                        <ol className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside"><span className='font-semibold text-lg'>useEffect's some other use cases:</span>
                            <li>Running once on mount: fetch API data.</li>
                            <li>Running on state change: validating input field.</li>
                            <li>Running on state change: live filtering.</li>
                            <li>Running on state change: trigger animation on new array value.</li>
                            <li>Running on props change: update paragraph list on fetched API data update.</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Activities;