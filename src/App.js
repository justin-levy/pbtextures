import './App.css';
import { Route, Routes } from 'react-router-dom';

import NoPage from './Layout/NoPage';
import Portfolio from './Layout/Portfolio';
import Contact from './Layout/Contact';
import Home from './Layout/Home'
import Layout from './Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Redirect to="/hsl/10/90/50" />
    //     </Route>
    //     <Route path="*">
    //       <AnimationApp />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
