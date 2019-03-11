import Dashboard from './views/Dashboard.jsx'
import Map from './views/Map.jsx'
import TableList from './views/TableList.jsx'

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/map',
    name: 'Map   (coming soon)',
    icon: 'tim-icons icon-pin',
    component: Map,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Table List   (coming soon)',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin'
  }
]
export default routes
