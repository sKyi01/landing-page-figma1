import './App.css';
import Content from './components/Content';
import ExploreData from './components/ExploreData';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoContents from './components/VideoContents';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <ExploreData/>
      <VideoContents/>
      <Footer/>
    </div>
  );
}

export default App;
