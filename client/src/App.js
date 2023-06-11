import './style.css'
import EnterTask from "./EnterTask";
import ListOfTasks from './ListOfTasks';
import Header from "./Header";

function App() {
  return (
    <div>
      <Header/>
      <EnterTask/>
      <ListOfTasks/>
    </div>
  );
}

export default App;
