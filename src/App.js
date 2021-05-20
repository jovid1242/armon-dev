
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import Home from './pages/Home';
import About from './pages/About';
import SalesOffices from './pages/SalesOffices'
import Contacts from './pages/Contacts'
import News from './pages/News'
import NewsID from './pages/NewsID'
import Career from './pages/Career'
import TradeIn from './pages/Tradein'
import Payment from './pages/Payment'
import Projects from './pages/Projects'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router
        basename="#"
      >
        <ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/sales-offices" exact component={SalesOffices} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/news" exact component={News} />
          <Route path="/news/:id" component={NewsID} />
          <Route path="/career" exact component={Career} />
          <Route path="/tradein" exact component={TradeIn} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/projects" exact component={Projects} />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
