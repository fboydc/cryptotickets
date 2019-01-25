import React, {useState, useEffect} from 'react';
import {BrowserRouter  as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Browse from './Browse';
import Create from './Create';
import Me from './Me';
import 'react-datepicker/dist/react-datepicker.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';


library.add(faSpinner);




const App = ()=>{

  
    

    return (
      <Router>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse}/>
            <Route path="/create" component={Create}/>
            <Route path="/me" component={Me}/>

        </div>
      </Router>
    );
}

export default App;
