// import components here
import { Group } from "@mui/icons-material";
import Users from "../pages/Users";
import Courses from "../pages/Courses";
import QuizPage from "../pages/QuizPage";
import Dashboard from "../pages/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import SecondQuizBox from "../components/SecondQuizBox";
import AddCourse from "../components/AddCourse";
import TenantLogin from "../pages/TenantLogin";
import Login from "../pages/Login";
import Exams from "../pages/Exams";
import Tenants from "../pages/Tenants";
import Profile from "../pages/Profile";

const ROUTES = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    element: <Dashboard />,
    icon: <Group />,
  },
  {
    id: 2,
    label: "Users",
    path: "/users",
    element: <Users />,
    icon: <Group />,
  },
  {
    id: 3,
    label: "Courses",
    path: "/courses",
    element: <Courses />,
    icon: <Group />,
  },

  {
    id: 4,
    label: "QuizPage",
    path: "/quizPage",
    element: <QuizPage />,
    icon: <QuizIcon />,
  },

  {
    id: 5,
    label: "SecondQuizBox",
    path: "/secondQuizBox",
    element: <SecondQuizBox />,
    icon: <QuizIcon />,
  },
  {
    id: 6,
    label: "AddCourse",
    path: "/addCourse",
    element: <AddCourse />,
    icon: <QuizIcon />,
  },
  {
    id: 7,
    label: "TenantLogin",
    path: "/TenantLogin",
    element: <TenantLogin />,
    icon: <QuizIcon />,
  },
  {
    id: 9,
    label: "Exams",
    path: "/exams",
    element: <Exams />,
    icon: <QuizIcon />,
  },
  {
    id: 10,
    label: "Tenants",
    path: "/tenants",
    element: <Tenants />,
    icon: <QuizIcon />,
  },
  {
    id: 11,
    label: "Profile",
    path: "/profile",
    element: <Profile />,
    icon: <QuizIcon />,
  },
];

export default ROUTES;
