import './Admin.css'
import DetailsToEdit from '../detailsToEdit/DetailsToEdit'
import DetailsToShow from '../detailsToShow/DetailsToShow'
import Login from '../login/Login'
import GlobalState from '../global/GlobalState';
import { observer } from 'mobx-react';
import { Outlet } from "react-router-dom";
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import { useState } from "react";
import Services from '../services/Services'
import Meetings from '../meetings/Meetings'

const Admin = observer(() => {
  const [showServices, setShowServices] = useState(false);

  if (!GlobalState.isAdmin) return <Login />;

  return (
    <>
      <div>
        <header>
          {!BusinessDetailsStore.isForEdit ?
            <DetailsToShow />
            : <DetailsToEdit />
          }
        </header>
      

          <div id="buttons">

            <button className="button btn" onClick={() => setShowServices(true)}>Services</button>
            <button className="button btn" onClick={() => setShowServices(false)}>Meetings</button>
          </div>
            <main>
          {showServices ? <Services /> : <Meetings />}
        </main>

        <Outlet />
      </div>

    </>
  )
})
export default Admin