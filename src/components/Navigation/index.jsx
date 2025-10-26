import { NavLink } from "react-router";

const handleActive = ({ isActive }) => ({
    background: isActive ? "orange" : "transparent",
    color: isActive ? "#fff" : "#333",
});

const items = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/news",
        title: "News",
    },
    {
        path: "/contact",
        title: "Contact",
    },
    {
        path: "/login",
        title: "Login",
    },
    {
        path: "/register",
        title: "Register",
    },
];

function Navigation() {
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink style={handleActive} to={item.path}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
