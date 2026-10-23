import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import PaperCatalogue from './components/PapersCatalogue';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/light-pollution" element={<PaperCatalogue activeSection="Light pollution" />} />
        <Route path="/wildfires" element={<PaperCatalogue activeSection="Wildfires" />} />
        <Route path="/general-relativity" element={<PaperCatalogue activeSection="General Relativity" />} />
      </Routes>
    </>
  );
}