import "./GoalsItem.css";

const GoalsItem = (props) => {
  return <li className="goal-item">{props.text}</li>;
};

export default GoalsItem;
