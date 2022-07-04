import React from "react";
import ReactDOM from "react-dom";

let stateIndex = -1;
let newState = [];
let setters = [];
function useState(initVale) {
  stateIndex++;
  const currentIndex = stateIndex;
  newState[currentIndex] = newState[currentIndex] || initVale;
  function setNewState(newVal) {
    newState[currentIndex] = newVal;
    render();
  }
  setters[currentIndex] = setNewState;

  return [newState[currentIndex], setters[currentIndex]];
}

let preArray = [];
// 定义effect的索引
let effectId = 0;
let lastRCb = []

function useEffect(callback, array) {
  if (typeof array === "undefined") {
    lastRCb[effectId] = callback();
  }
  if (preArray[effectId]) {
    const oldVal = preArray[effectId];
    const hasChanged = array.every((item, index) => {
      return item === oldVal[index];
    });
    if (!hasChanged) {
      preArray[effectId] = array;
      if(lastRCb[effectId]){
        lastRCb[effectId]()
      }
      lastRCb[effectId] = callback();
    }
  }
  effectId++;
}

function render() {
  stateIndex = -1;
  effectId = 0;
  ReactDOM.render(<App />, document.querySelector("#root"));
}

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(11);
  useEffect(() => {
    console.log(22222);
  }, []);
  useEffect(() => {
    console.log(count, "===count1===");
  }, [count]);
  useEffect(() => {
    console.log(count2, "===count2===");
    return ()=>{
      console.log('destory')
    }
  }, [count2]);
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <h1>当前求和为2：{count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我+1
      </button>
      <h1>当前姓名为：11</h1>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        点我修改姓名
      </button>
    </div>
  );
}
console.log(JSON.stringify((<div className="a"><a>1</a></div>),null,2))
ReactDOM.render(<App />, document.querySelector("#root"));
