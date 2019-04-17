// COMPONENTS
import Artist from 'features/artist/Artist';
import Home from 'features/Home';
import About from 'features/about/About';

const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/artiste/:id',
    component: Artist,
  },
  {
    path: '/about',
    component: About,
  }
];

export default routes;