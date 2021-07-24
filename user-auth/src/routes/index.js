import { PATHS } from "../config";
import LoginForm from "../Pages/LoginForm";
import SignupForm from "../Pages/SignupForm";
import HomePage from "../Pages/Home";

const routes = [
  { path: PATHS.login, exact: true, component: LoginForm },
  { path: PATHS.signup, exact: true, component: SignupForm },
  { path: PATHS.home, exact: true, component: HomePage },
];
export default routes;
