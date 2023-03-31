import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div className = "App">
      <Stars count = {3}/>
		<Stars count = {5}/>
		<Stars count = {'app'}/>
    </div>
  );
}

export default App;
