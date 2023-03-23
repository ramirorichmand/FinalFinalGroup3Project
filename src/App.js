import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* fix error with background image */}
    </div>
  );
}


export default App;
