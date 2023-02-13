import styles from "./Button.module.css";

const Button = (props) => {
  return <button onClick={props.onClick} className={styles.button} type={props.type}>Add goal</button>;
};

export default Button;

// HERE WE USE CSS MODULES APPROACH INSTEAD OF STYLED COMPONENTS
// ADD 'STYLES' TO IMPORT CSS; ADD 'MODULES' TO CSS FILE NAME; USE STYLES IN CLASSNAME
// THIS APPROACH ENSURES THAT STYLES WILL BE APPLIED ONLY TO CONCRETE COMPONENT, NOT FOR ALL OTHER