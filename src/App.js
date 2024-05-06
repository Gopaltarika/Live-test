import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyHeader from './components/MyHeader';
import SevenAi from './components/SevenAi';
import Statistics from './components/Statistics';
function App() {
  return (
    <div className='bg-body-color'>
     <MyHeader />
     <SevenAi />
     <Statistics />
    </div>
  );
}

export default App;
