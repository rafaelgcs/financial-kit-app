import { Routes, Route } from "react-router-dom";
import route_list from "./route_list";


const SystemRoutes = () => {
    return (
        <Routes>
            {
                route_list.map((r) => {
                    if (r.children.length > 0) {

                        return (
                            <Route key={`route_item${r.path}`} path={r.path} element={<r.component />}>
                                {
                                    r.children.map((rc) => {

                                        if (r.path === rc.path) return <Route key={`route_children${rc.path}`} index element={<rc.component />} />

                                        return <Route key={`route_children${rc.path}`} path={rc.path} element={<rc.component />} />
                                    })
                                }
                            </Route>
                        );
                    } else {

                        return <Route key={`route_item${r.path}`} path={r.path} element={<r.component />} />
                    }
                })
            }
        </Routes>
    )
}

export default SystemRoutes;