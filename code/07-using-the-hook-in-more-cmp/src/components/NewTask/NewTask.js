import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  //dalsie znovupouzitie useHttp custom hooku
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  //vytvorenie function z predosleho 06 kroku
  //taskText musi byt prvy, kedze je to bindnute
  // taskData sa sem dostane ked sa spracuje applyData() v custom hooku
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    //zavolanie alias function s korektnymi params
    //tu ziadny useCallback netreba, kedze eenterTaskHandler neni vnutri useEffect alebo nejakeho ineho hooku
    sendTaskRequest(
      {
        url: 'https://react-tryout-course-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { text: taskText },
      },
      //cez bind si posuniem taskText do function aby som s nazvom tasku mohol pracovat nadalej
      //bind is used to preconfigure the function
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
