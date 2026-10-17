import { useState } from "react"
import NavMap from "../tools/NavMap"

export default function Room1() {

  const [test,settest] = useState(1); 

  const map = () => {
    settest(test + 1)
  }

  return (
    <div>
      <h2 onClick={map}>aaaaa</h2>
      <NavMap PropsNav={test}/>
    </div>
  )
}
