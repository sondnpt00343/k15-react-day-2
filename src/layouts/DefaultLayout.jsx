import { Outlet } from "react-router";

import Header from "@/components/Header";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <main
                style={{
                    minHeight: "100vh",
                }}
            >
                <Outlet />
            </main>
            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default DefaultLayout;
