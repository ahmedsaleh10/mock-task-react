import './App.css';
import {usersData} from "./mockData/usersData"
import Users from "./components/Users"

function App() {
  return (
    <div className='app' >
      <Users data={usersData}/>
    </div>
  );
}

export default App;
