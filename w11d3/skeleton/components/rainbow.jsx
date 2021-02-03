import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';
// import Orange from './orange';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">green</NavLink>
        <NavLink to="/blue">blue</NavLink>
        <NavLink to="/violet">violet</NavLink>
        {/* <Link to="/red">Red</Link>
        <Link to="/green">green</Link>
        <Link to="/blue">blue</Link>
        <Link to="/violet">violet</Link> */}

        <div id="rainbow">

            <Route path="/red" component={Red}></Route>
            <Route path="/green" component={Green}></Route>
            <Route path="/blue" component={Blue}></Route>
            <Route path="/violet" component={Violet}></Route>
        </div>
      </div>
    );
  }
};

export default Rainbow;
