import './App.css';
import projects from './assets/data/projects';
import Card from './components/Card';
import Footer from './components/Footer';
import Profile from './components/Profile';
import YouTube from './components/YouTube';
import { FC } from 'react';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__grid">
          <Profile />
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
        <div className="App__footer">
          <YouTube />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
