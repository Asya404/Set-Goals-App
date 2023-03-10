import styles from "./GoalsList.module.css";
import GoalsItem from "./GoalsItem";

const GoalsList = (props) => {


  return (
    <ul className={styles["goals-list"]}>
      {props.items.map((item) => (
        <GoalsItem key={item.id} id={item.id} text={item.text} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default GoalsList;

// HERE WE LIFT UP ID FROM GOALS ITEM ON DELETE