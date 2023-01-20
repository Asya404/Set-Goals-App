import React, { useState } from "react";
import GoalsForm from "./components/GoalsForm";
import GoalsList from "./components/GoalsList";
import './App.css';

const DUMMY_GOALS = [
    { text: "Do all exercises!", id:"g1" },
    { text: "Eat healthy breakfast!", id:"g2" }
]

function App() {
  const [goals, updateGoals] = useState(DUMMY_GOALS);


  const saveDataHandler = (newGoals) => {
    updateGoals((prevGoals) => {
      return [newGoals, ...prevGoals];
    });
  }

  console.log(goals);

  return (
    <div className="goals">
      <GoalsForm className="goals-form" onAddGoal={saveDataHandler} />
      <GoalsList items={goals} />
    </div>
  );
}

export default App;
