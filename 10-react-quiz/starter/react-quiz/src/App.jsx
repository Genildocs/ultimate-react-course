import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

const initialState = {
  questions: [],
  status: 'loading...',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataError':
      return {
        ...state,
        status: 'error',
      };
    default:
      throw new Error('Unexpected action');
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numberQuestions = questions.length;

  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataError' }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading...' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numberQuestions} />}
        {status === 'active' && <Question />}
      </Main>
    </div>
  );
}
