import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from "./component/Footer"
function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content/>
      </section>

      <Footer/>
    </>
  );
}

export default App;
