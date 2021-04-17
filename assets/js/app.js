(function () {

  // 1. State
  const initState = {
    todos: [],
    filter: 'ALL',
  }

  // 2. Actions
  // createActions
  const addTaskAction = (newTask) => {
    return {
      type: 'ADD TASK',
      payload: { newTask }
    }
  };

  const removeTaskAction = (id) => {
    return {
      type: 'REMOVE TASK',
      payload: { id }
    }
  };
  // TODO create action => Actualizar
  // createActions changeFilter

  // 3 Reducers
  const todosReducer = (state = [], action) => {
    if (action.type === 'ADD TASK') {
      return state.concat(action.payload.newTask);
    }
    if (action.type === 'REMOVE TASK') {
      // TODO
      return state;
    }
    // TODO update
    return state;
  }

  const filterReducer = (state = 'ALL', action) => {
    if (action.type === 'CHANGE TO ALL') {
      return 'ALL';
    }
    if (action.type === 'CHANGE TO ACTIVE') {
      return 'ACTIVE';
    }
    // TODO completed
    return state;
  }

  // 4. Creat store

  const rootReducer = Redux.combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  });

  const store = Redux.createStore(
    rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  
  setTimeout(() => {
    const action1 = addTaskAction({
      title: 'Title 1',
      completed: false
    });
    store.dispatch(action1);
  }, 5000)

  setTimeout(() => {
    const action2 = addTaskAction({
      title: 'Title 2',
      completed: true
    });
    store.dispatch(action2);
  }, 10000)
  
	
})();