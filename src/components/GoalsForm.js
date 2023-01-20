import React, { useState } from "react";
import "./GoalsForm.css";

const GoalsForm = (props) => {
  const [enteredText, updateEnteredText] = useState("");

  const textChangeHandler = (e) => {
    updateEnteredText(e.target.value);
  };

  const saveDataHandler = (e) => {
    e.preventDefault();
    const newGoals = { text: enteredText, id: Math.random().toString() };
    props.onAddGoal(newGoals);
  };

  return (
    <form className="goal-form">
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={textChangeHandler}></input>
      </div>
      <button onClick={saveDataHandler} className="button" type="submit">
        Add goal
      </button>
    </form>
  );
};

export default GoalsForm;

// FIRST ON CHANGE WE SAVE E.TARGET.VALUE IN FUNCTION
// AND UPDATE STATE WITH THIS VALUE
