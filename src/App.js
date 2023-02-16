import React, { useState } from "react";
import GoalsForm from "./components/GoalsForm";
import GoalsList from "./components/GoalsList";
import styles from "./App.module.css";

const DUMMY_GOALS = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Eat healthy breakfast!", id: "g2" },
];

function App() {
  const [goals, updateGoals] = useState(DUMMY_GOALS);

  // HERE WE GOT LIFTED OBJ WITH ENTERED TEXT FROM FORM COMPONENT
  // AND UPDATE OUR MAIN ARRAY
  const addItemHandler = (newGoals) => {
    updateGoals((prevGoals) => {
      return [newGoals, ...prevGoals];
    });
  };

  // HERE WE GOT CLICKED LIFTED GOAL ID FROM THE ITEM COMPONENT
  // THEN WE UPDATE OUR ARRAY BASED ON PREV AND FILTER ITEMS
  const deleteItemHandler = (goalId) => {
    updateGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  };

  // console.log(goals);

  return (
    <div className={styles.goals}>
      <GoalsForm className="goals-form" onAddGoal={addItemHandler} />
      <GoalsList items={goals} onDelete={deleteItemHandler} />
    </div>
  );
}

export default App;
