import React, { useState } from "react";
import "./GoalsList.css";
import GoalsItem from "./GoalsItem";

const GoalsList = (props) => {
  return (
    <ul className="goals-list">
      {props.items.map((item) => (
        <GoalsItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default GoalsList;
