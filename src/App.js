import React from "react";
import "./App.css";
import "./styles/tachyons.min.css";
import AddTodo from "./AddTodo";

function App() {
  return (
    <div className="bg-white mw6 center mt4 mt5-ns pa3 pb5 br3 pointer ">
      <h1 className="f2">Todo list</h1>
      <AddTodo />
      {/* Item 1 */}
      <div className="pv3 flex items-center hover-bg-lightest-blue bg-animate">
        <div className="w2 flex items-center">
          <svg
            className="center"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#F4969E" strokeWidth="2" />
          </svg>
        </div>
        <div className="mh2">Item 1</div>
      </div>
      {/* End of item 1   */}
      {/* Item 2  */}
      <div className="pv3 flex items-center">
        <div className="w2 flex items-center">
          <svg
            className="center"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#777" strokeWidth="2" />
          </svg>
        </div>
        <div className="mh2 gray strike">Item 2</div>
      </div>
      {/* End of item 2   */}
      {/* Item 3 */}
      <div className="pv3 flex items-center">
        <div className="w2 flex items-center">
          <svg
            className="center"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#F4969E" strokeWidth="2" />
          </svg>
        </div>
        <div className="mh2">Item 3</div>
      </div>
      {/* End of item 3  */}
      {/* Item 4 */}
      <div className="pv3 flex items-center">
        <div className="w2 flex items-center">
          <svg
            className="center"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#777" strokeWidth="2" />
          </svg>
        </div>
        <div className="mh2 gray strike">Item 4</div>
      </div>
      {/* End of item 4 */}
      {/* Item 5 */}
      <div className="pv3 flex items-center">
        <div className="w2 flex items-center">
          <svg
            className="center"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6" stroke="#777" strokeWidth="2" />
          </svg>
        </div>
        <div className="mh2 gray strike">Item 5</div>
      </div>
      {/* End of item 5 */}
    </div>
  );
}

export default App;
