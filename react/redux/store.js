function createStore(initState,reducer) {
  let state = initState
  let listeners = []
  function getState(){
    return state
  }
  function dispatch(action){
    state = reducer(state,action)
    listeners.forEach(val=>val())

  }

  function subscribe(listener){
    listeners.push(listener)
  }


  return {
    getState,
    dispatch,
    subscribe
  }
}

function reducer(state,action){
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        couter:1
      }
      break;
  
    default:
      return {
        ...state,
        couter2:1
      }
      break;
  }
}
const initState = {
  initCount:1
}
const store = createStore(initState,reducer);

let next = store.dispatch
store.dispatch = action => {
    //调用真正触发的action
    next(action)
}

store.dispatch({
  type:'ADD'
})
const currentState = store.getState();
console.log(currentState,'========')