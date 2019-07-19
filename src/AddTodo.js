import React, { useState } from "react";

const AddTodo = () => {
  // set up the state variable(value) and the state function(setValue)
  // the initial value is blank useState("")
  const [value, setValue] = useState("");

  return (
    <form
      // on submission of the form, run an event that:
      // prevents the default action of html element form
      // logs the {value} which is the same value as the input
      // reset the value (setValue(""));
      onSubmit={event => {
        event.preventDefault();
        console.log(value);
        // resets value
        setValue("");
      }}
    >
      <div className="pv1 flex items-center br2">
        <div className="flex items-center">
          <svg
            className="pl2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.34445 1.33677V6.62238H14.6607C16.4464 6.62238 16.4464 9.32665 14.6607 9.32665H9.34445V14.6328C9.34445 16.4151 6.63502 16.4151 6.63502 14.6328V9.32665H1.33932C-0.44644 9.32665 -0.44644 6.62238 1.33932 6.62238H6.63502V1.33677C6.63502 -0.44559 9.34445 -0.44559 9.34445 1.33677Z"
              fill="#46C665"
            />
          </svg>
        </div>
        <div className="flex-grow-1 pr3">
          <input
            type="text"
            placeholder="Add new todo"
            className="bn mh3 pv2 b black pointer w-100 pl1"
            //every time this input changes (some enters or removes characters)
            // Use the setValue function(that updates value) to equal the target(input) value
            onChange={event => {
              setValue(event.target.value);
            }}
            value={value}
            // make the inputs value equal the value(variable)
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
