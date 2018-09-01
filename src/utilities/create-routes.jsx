import React from 'react';

// SI. may be an issue because BrowserRouter was originally imported as three Components: Router, Route & NavLink
import { BrowserRouter as Route } from "react-router-dom";
import routes from '@utilities/routes.jsx';


const CreateRoutes = () => {
    return (
      
        routes.map((route, index) => 
        (
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact} 
            component={route.sidebar} 
          />
        )
      )
    );
};


export default CreateRoutes;
