
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    // <Navbar title="TextUtils" aboutText="About Us"/>
    <>
    <Navbar title='TextUtils' aboutText='About Us'/>
    <TextForm heading='Enter text here'/>
    </>
  );
}

export default App;
