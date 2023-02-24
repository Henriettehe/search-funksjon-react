import { Link, Outlet } from "react-router-dom";
//Outlet, sier hvordan Layouten skal være. Den tar med data/props som sendes. 

export default function Layout() {
    return (
        <div id="container">
        <header>
            <Link to="/">
                <h1>Matprat</h1>
            </Link>
        </header>
            <main>
                <Outlet/>
            </main>
        <footer>

        </footer>
      </div>
    )
}