import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    debugger
    return(
      <div>
        <h2 className="red"></h2>
        <NavLink exact to="/red">red only</NavLink>
        <NavLink to="/red/orange">orange</NavLink>
        <NavLink to="/red/yellow">yellow</NavLink>

        {/* <Link to="/red/orange">orange</Link>
        <Link to="/red/yellow">yellow</Link> */}

        <Route path="/red/orange" component={Orange} />
        <Route path="/red/yellow" component={Yellow} />
      </div>
    );
  }
};

export default Red;
