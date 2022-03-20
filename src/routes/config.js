

// import components here
import { Dashboard, Group } from '@mui/icons-material';
import Users from '../pages/Users';

const ROUTES = [
    {
        id: 1,
        label: 'Dashboard',
        path: '/',
        element: () => (<div>Test</div>),
        icon: <Dashboard />
    },
    {
        id: 2,
        label: 'Users',
        path: '/users',
        element: <Users />,
        icon: <Group />
    }
];

export default ROUTES;