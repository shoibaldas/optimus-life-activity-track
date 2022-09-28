// import React, { useEffect, useState } from 'react';
// import Activity from '../Activity/Activity';


// const Activities = () => {
//     const [activities, setActivities] = useState([]);

//     useEffect(() => {
//         fetch('fakedata.json')
//             .then(res => res.json())
//             .then(data => setActivities(data))
//     }, [])

//     return (
//         <div className="mt-20 container mx-auto flex flex-row justify-center manrope-font">
//             <div className="w-4/6">
//                 <div className="grid grid-cols-3 gap-y-10">
//                     {/*  */}
//                     {
//                         activities.map(activity => <Activity
//                             key={activity.id}
//                             activity={activity}
//                         ></Activity>)
//                     }
//                 </div>
//             </div>

//             <div className="w-2/6">
//                 <div className="grid gap-y-10">
//                     <div className="w-96 h-72 bg-gray-300 rounded overflow-hidden shadow-lg">
//                         <div className="flex flex-col items-center">
//                             <h2 className="mt-4 mb-2 text-2xl font-semibold text-center"> </h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Activities;