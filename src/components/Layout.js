import { Link, Outlet } from "react-router-dom";
<<<<<<< HEAD
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
=======

export default function Layout(){
    return (
        <div id="container">
          <header>
            <Link to="/">
                <h1>Matprat</h1>
            </Link>
            
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
    
          </footer>
        </div>
>>>>>>> c7454219838e3916569f7b1d25af5da9ea39f465
    )
}