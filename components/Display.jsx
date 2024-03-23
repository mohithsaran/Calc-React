import styles from "./Display.module.css"
const Display = ({displayval}) => {
    return (
        <>
        <input type="text" className={styles.display} value={displayval} readOnly></input>
        </>
      );
}
 
export default Display;