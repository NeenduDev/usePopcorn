import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import AppV2 from "./App-v2";
import AppV3 from "./App-v3";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} maxRating="10" />
//       <p>This movie was rated {movieRating} starts</p>
//     </div>
//   );
// }
// console.log("NODE_ENV:", process.env.NODE_ENV);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppV2 /> */}
    <AppV3 />
    {/* <StarRating
      testProp={3}
      maxRating={10}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={0} />
    <Test /> */}
  </React.StrictMode>
);
