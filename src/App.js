import './style.css';
import Header from './components/Header';
import QrUserScreen from './screens/QrUserScreen';
function App() {
  return (
    <div className="container">
      <Header/>
      <main>
        <QrUserScreen/>
      </main>
      <footer>
        Developed by Oussama Boujnan.
      </footer>
    </div>
  );
}

export default App;
