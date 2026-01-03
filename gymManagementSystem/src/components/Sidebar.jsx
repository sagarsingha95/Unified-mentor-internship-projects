import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { DataContext } from "../context/DataContext";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const {setLogin} = useContext(DataContext)

  function handleLogout(){
    setLogin(false)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <div>

      <button className="md:hidden p-4" onClick={() => setShow(!show)}>
        <CiMenuBurger size={30} />
      </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${show ? "open" : ""}`}>
        <div className="flex items-center ">
          <button className="md:hidden p-3" onClick={() => setShow(false)}>
            <IoMdClose size={30} />
          </button>
          <h2>🏋 Flexzone Fitness</h2>
        </div>

        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/trainers">Trainers</NavLink>
          <NavLink to="/classes">Classes</NavLink>
          <NavLink to="/payments">Payments</NavLink>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>
    </>
  );
}
