import app_routes from '../modules/app/routes';

const getAllRoutes = () => {

    let list_of_routes = [
        app_routes
    ];

    return list_of_routes;

}

const route_list = getAllRoutes();


export default route_list;