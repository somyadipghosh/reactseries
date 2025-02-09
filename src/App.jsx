import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response=await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <Router>
      <div className='p-10'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
