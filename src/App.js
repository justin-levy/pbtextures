import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Layout/NoPage';
import Portfolio from './Layout/Portfolio';
import Contact from './Layout/Contact';
import Home from './Layout'
import Layout from './Layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
