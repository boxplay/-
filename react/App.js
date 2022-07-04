import React from "react";
import {createRoot} from "react-dom/client";

const App = ()=>{
  return (
    <div>
      App is ready
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)