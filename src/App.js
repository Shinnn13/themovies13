import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import "./style/landingpage.css"
import Superhero from './components/SuperHero';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='MyBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End Instro section */}

      {/* Trending Section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End of Trending Section */}

      {/* Superhero Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of superhero section */}
    </div>
  );
}

export default App;
