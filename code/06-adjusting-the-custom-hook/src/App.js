import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    //tu by sa mal pouzit useCallback, ale lepsi pristup je pouzit transformTasks priamo v fetchTasks
    // a kedze transformTask je presunute dovnutra useEffect, tak nevznika nam external dependency
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      //here is transformation logic from the app.js in previous project
      // mapovanie objektov z firebase na nas objekt
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    //toto je kod ktory sa nakoniec nepouzil
    //fetchTask is an alias
    // const {isLoading, error, sendRequest: fetchTasks} = useHttp({url: 'http://'}, transformTasks);

    fetchTasks(
      { url: 'https://react-tryout-course-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks
    );


  }, [fetchTasks]); //we have to rerun this effect when fetchTasks changes

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
