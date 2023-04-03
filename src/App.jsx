import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [counter1, setCounter1] = useState(0)
 const [counter2, setCounter2] = useState(0)
//  here count is the name of state , setCounter is the function you will eventually use to change the initial value of this state
//  And the 0 is the initial value of our state
const handleClick1 = () => { setCounter1(counter1 + 1)}
const handleClick2 = () => { setCounter2(counter1 + 1)}


useEffect (()=>{
    console.log("Inside of useEffect")
},[counter1]);

  return (
    <>
    <button onClick={handleClick1}>
      Click Me 1
    </button>
    <br />
    <button onClick={handleClick2}>
      Click Me 2
    </button>
    <br />
    <div>{`Counter 1 : ${counter1}`}</div>
    <div>{`Counter 2 : ${counter2}`}</div>
    </>
  )
}

export default App


// function MyComponent(props) {
//   useEffect(() => {
//     // Callback function for side effects
//     // Runs after every render of the component
//     // May return a cleanup function
//   }, [/* Array of dependencies */] );
// if there is no dependency i.e [] then the hook will be called only once
// if there is n array [] then it will be called again and again on the  re-rendering of component, irrespective of anything/everything
//   // Component rendering code
// }