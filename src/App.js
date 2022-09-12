
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { Route, Switch ,Redirect } from "react-router";
import Footer from './Components/Footer';


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/service" component={Service} />
   <Route exact path="/contact" component={Contact} />
   <Redirect to="/" />
   </Switch>
   <Footer/>
   </>
  );
}

export default App;
