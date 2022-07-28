import Layout_Dashboard from "./layouts/dashboard";
import App_Dashboard from "./views/dashboard";

const routes = {
    path: '/',
    component: Layout_Dashboard,
    children: [
        {
            path: '/',
            component: App_Dashboard
        }
    ]
}
    ;


export default routes;