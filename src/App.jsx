// import React from "react";
// import Card from "./components/Card";
// const App = () => {
//   // const user = "Komal"
//   // const arr = ["Komal", "ram", "Krishana", "Radha"]

//   return (
//     // <div>
//     //   {arr.map(function(elem){
//     //     return <h1>{elem}</h1>
//     //   })}
//     // </div>
//     // <div>{Card("Komal")}</div>
//     // <div className="bg-[#111] min-h-screen text-white w-full p-10">
//     //   <Card user ="Komal" marks={90} city="New York"/>
//     //   <Card user ="Krishna" marks={90} city="New York"/>
//     //   <Card user ="Radha" marks={85} city="Los Angeles"/>
//     //   <Card user ="Ram" marks={88} city="Chicago"/>
//     //   <Card user ="Sita" marks={92} city="San Francisco"/>
//     // </div>
//   );
// };

// export default App;


// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = ["Komal", "Krishna", "Radha", "Ram", "Sita"]

//   return (
//     <div>
//       {users.map((elem) => {
//         return <Card user={elem}/>;
//       })}
//     </div>
//   ) 
// }

// export default App

import React from 'react'
import FollowersCard from './components/FollowersCard'

const App = () => {
  return (
    <div>
      <FollowersCard />
    </div>
  )
}

export default App