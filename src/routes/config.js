

// import components here
import { Dashboard, Group, MenuBook } from '@mui/icons-material';
import Tenants from "../pages/Tenants";
import Courses from '../pages/Courses'

const ROUTES = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    element: () => <div>Test</div>,
    icon: <Dashboard />,
  },
  {
    id: 2,
    label: "Tenants",
    path: "/tenants",
    element: <Tenants />,
    icon: <Group />,
  },
  {
    id: 3,
    label: "Courses",
    path: "/courses",
    element: <Courses />,
    icon: <MenuBook />,
  },
];

export default ROUTES;