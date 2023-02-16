import React, { useState } from "react";
import Button from "./Button";
import styles from "./GoalsForm.module.css";

const GoalsForm = (props) => {
  const [enteredText, updateEnteredText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    if (enteredText.trim().length > 0) {
      setIsValid(true);
    }
    updateEnteredText(e.target.value);
  };

  const submitDataHandler = (e) => {
    e.preventDefault();

    // HERE WE CHECK IF IT'S EMPTY, FOR THAT TRIM VALUE (REMOVE SPACES FROM BEG AND END) THEN RETURN
    // ALSO WE CHANGE VAR ISVALID TO FALSE AND APPLY DYNAM. CLASSES
    // HERE UPPER, IF IT'S NOT EMPTY, WE SET BACK TO TRUE IN THE MOMENT OF TYPING
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoals = { text: enteredText, id: Math.random().toString() };
    props.onAddGoal(newGoals);

    // HERE WE MAKE EMPTY INPUT AFTER SAVE
    updateEnteredText("");
  };

  return (
    <form className={styles["goal-form"]}>
      <div className={`${styles["form-control"]} ${!isValid && styles["invalid"]}`}>
        <label>Course Goal</label>
        <input type="text" onChange={textChangeHandler} value={enteredText}></input>
      </div>

      <Button onClick={submitDataHandler} type="submit"></Button>
    </form>
  );
};

export default GoalsForm;

// FIRST ON CHANGE WE UPDATE ENETERED TEXT VAR WITH E.TARGET.VALUE
// THEN ON CLICK ON BTN WE SAVE THIS ENETERD TEXT INTO OBJ AND LIFT IT UP TO THE APP
