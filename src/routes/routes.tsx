import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";

const publicRoutes = [
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/contact", component: Contact },
];

export default publicRoutes;
