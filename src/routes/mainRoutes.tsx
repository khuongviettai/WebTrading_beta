import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Contact from "../components/Contact/Contact";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Indicator from "../components/Indicator/Indicator";

const publicRoutes = [
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/contact", component: Contact },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/indicator", component: Indicator },
];

export default publicRoutes;
