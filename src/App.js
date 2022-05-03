import logo from './logo.svg';
import './App.css';
/* import ContactListComponent from './components/container/contact_list'; */
import Clock from './components/container/clockclass';
import Clockfunctional from './components/container/clockfunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactListComponent/> */}
        <hr/>
      </header>
      <main>
{/*       <h2>Class Component</h2>
        <Clock/>
        <hr/> */}
      <h2>Functional Component</h2>
      <Clockfunctional/>
      </main>
    </div>
  );
}

export default App;
