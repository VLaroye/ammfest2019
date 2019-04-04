// COMPONENTS
import Artist from 'features/artist/Artist';
import Home from 'features/Home';

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
  }
];

export default routes;