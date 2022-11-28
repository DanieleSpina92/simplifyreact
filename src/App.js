import './App.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import { listTodos } from './graphql/queries';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);


// const todos = await API.graphql(graphqlOperation(listTodos));
// console.log(todos);

function App() {
  return (
    <div className="App">
      <h3>Lista dati da dynamo DB</h3>
    </div>
  );
}

export default App;
