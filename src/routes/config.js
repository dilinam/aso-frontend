// import components here
import { Dashboard, Group } from "@mui/icons-material";
import Users from "../pages/Users";
import Courses from "../pages/Courses";
import QuizPage from "../pages/QuizPage";
import CourseSection from "../pages/CourseSection";
import QuizIcon from "@mui/icons-material/Quiz";
import SecondQuizBox from "../components/SecondQuizBox";
import AddCourse from "../components/AddCourse";
import TenantLogin from "../pages/TenantLogin";
import Login from "../pages/Login";
import Exams from "../pages/Exams";

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
    id: 8,
    label: "Login",
    path: "/login",
    element: <Login />,
    icon: <Dashboard />,
    hideLayout: true
  },
  {
    id: 8,
    label: "Exams",
    path: "/exams",
    element: <Exams/>,
    icon: <QuizIcon/>,
  }
];

export default ROUTES;
