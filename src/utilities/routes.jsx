import React from 'react';

//pages
import LandingPage from '@pages/LandingPage';
import SplashAPI from '@pages/SplashAPI/SpashAPI';
import Todo from '@pages/Todo/Todo';
import Explore from '@pages/Explore/Explore';

//react-router-dom routes
export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <LandingPage />,
    main: () => <h2>Home</h2>
  },
  {
    path: "/todo",
    sidebar: () => <Todo />,
    main: () => <h2>Todo</h2>
  },
  {
    path: "/pictures",
    sidebar: () => <SplashAPI />,
    main: () => <h2>SplashAPI</h2>
  },
  {
    path: "/explore",
    sidebar: () => <Explore />,
    main: () => <h2>Explore</h2>
  }
];

export default routes;
