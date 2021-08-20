import Login from "./pages/login";
import Register from "./pages/register";

const routes = [
    {
        path: "/login",
        component: Login,
        exact: false
    },
    {
        path: "/register",
        component: Register,
        exact: false
    }
]

export default routes;

