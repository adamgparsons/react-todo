import React, { useState } from "react";

const ListItem = ({ todo }) => {
  const [done, setDone] = useState(false);
  return (
    <div
      className="pv3 flex items-center hover-bg-lightest-blue bg-animate"
      onClick={event => {
        setDone(done ? false : true);
      }}
    >
      <div className="w2 flex items-center pl3">
        <input
          type="checkbox"
          className="center"
          checked={done ? true : false}
        />
      </div>
      <div className={done ? "mh2 pl3 gray strike" : "mh2 pl3"}>{todo}</div>
    </div>
  );
};

export default ListItem;
// #777
