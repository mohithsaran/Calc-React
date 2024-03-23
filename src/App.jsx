import styles from "./App.module.css"
import Display from "../components/Display"
import ButtonContainer from "../components/ButtonContainer"
import { useState } from "react"

function App() {
  let [display, setDisplay] = useState("")
  const onButtonClick = (buttonText) => {
    if(buttonText==="C"){
      setDisplay("")
    }
    else if(buttonText==="="){
      const result=eval(display);
      setDisplay(result)
  }
  else{
    const newDisplay=display+buttonText;
    setDisplay(newDisplay)
  }
  
}
  return (
    <>
    <center>
      <div className={styles.calculator}> 
        <Display displayval={display}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
      </center>
    </>
  )
}

export default App
