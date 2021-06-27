import './App.css';
import Header from './Components/Header'
import DateLC from './Components/DateLC'
import AboutApi from './Components/AboutApi'


function App() {
  return (
    <div >
      <div className="content1">
      <Header />
      <DateLC />
      </div>
      <div className="content2">
      <AboutApi />
      </div>
     
    </div>
  );
}

export default App;
