import "./GoalsItem.css";

const GoalsItem = (props) => {
  const deleteHandler = (e) => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" id={props.id} onClick={deleteHandler}>
      {props.text}
    </li>
  );
};

export default GoalsItem;

// TO DELETE ITEM WE NEED TO LIFT UP ID OF THE ELEMENT