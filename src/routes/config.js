// import components here
import { AdminPanelSettings, Dashboard, Group, MenuBook, SafetyDivider } from '@mui/icons-material';
import Tenants from "../pages/Tenants";
import Courses from '../pages/Courses'
import Candidates from '../pages/Candidates';
import Examiners from '../pages/Examiners';

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
    icon: <AdminPanelSettings />,
  },
  {
    id: 3,
    label: "Courses",
    path: "/courses",
    element: <Courses />,
    icon: <MenuBook />,
  },
  {
    id: 4,
    label: "Candidates",
    path: "/candidates",
    element: <Candidates />,
    icon: <Group />,
  },
  {
    id: 5,
    label: "Examiners",
    path: "/examiners",
    element: <Examiners />,
    icon: <SafetyDivider />,
  },
];

export default ROUTES;