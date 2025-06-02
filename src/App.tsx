import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsByTech from './pages/ProjectsByTech';
import Resume from './pages/Resume';
import Connect from './pages/Connect';
import Guidance from './pages/Guidance';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:tech" element={<ProjectsByTech />} />
        <Route path="resume" element={<Resume />} />
        <Route path="connect" element={<Connect />} />
        <Route path="guidance" element={<Guidance />} />
      </Route>
    </Routes>
  );
}

export default App;