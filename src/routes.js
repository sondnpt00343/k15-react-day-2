import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import NoLayout from "./layouts/NoLayout";

import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Policy from "./pages/Policy";
import paths from "./configs/paths";
import Term from "./pages/Term";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import PreviewAvatar from "./pages/PreviewAvatar";
import UseRef from "./pages/UseRef";
import ReactMemo from "./pages/ReactMemo";
import UseState from "./pages/UseState";
import UseMemo from "./pages/UseMemo";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.home, component: Home },
            { path: paths.news, component: News },
            { path: paths.products, component: Products },
            { path: paths.previewAvatar, component: PreviewAvatar },
            { path: paths.useRef, component: UseRef },
            { path: paths.reactMemo, component: ReactMemo },
            { path: paths.useState, component: UseState },
            { path: paths.useMemo, component: UseMemo },
            { path: paths.useContext, component: UseContext },
            { path: paths.useReducer, component: UseReducer },
        ],
    },
    {
        layout: AuthLayout,
        children: [
            { path: paths.login, component: Login },
            { path: paths.register, component: Register },
        ],
    },
    {
        layout: NoLayout,
        children: [
            { path: paths.contact, component: Contact },
            { path: paths.policy, component: Policy },
            { path: paths.notFound, component: NotFound },
            { path: paths.term, component: Term },
            { path: paths.todo, component: Todo },
        ],
    },
];

export default routes;
