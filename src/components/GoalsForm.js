import "./GoalsForm.css";

const GoalsForm = () => {
  return (
    <form className="goal-form">
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text"></input>
      </div>
      <button className='button' type="submit">Add goal</button>
    </form>
  );
};

export default GoalsForm;
