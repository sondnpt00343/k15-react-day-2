import paths from "@/configs/paths";
import { NavLink } from "react-router";

const handleActive = ({ isActive }) => ({
    background: isActive ? "orange" : "transparent",
    color: isActive ? "#fff" : "#333",
});

const items = [
    {
        path: paths.home,
        title: "Home",
    },
    {
        path: paths.news,
        title: "News",
    },
    {
        path: paths.contact,
        title: "Contact",
    },
    {
        path: paths.login,
        title: "Login",
    },
    {
        path: paths.register,
        title: "Register",
    },
];

function Navigation() {
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    gap: 20,
                    listStyle: "none",
                }}
            >
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
