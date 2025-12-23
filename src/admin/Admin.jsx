import './Admin.css'
import DetailsToEdit from '../detailsToEdit/DetailsToEdit'
import DetailsToShow from '../detailsToShow/DetailsToShow'
import Login from '../login/Login'
import GlobalState from '../global/GlobalState';
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import BusinessDetailsStore from '../global/BusinessDetailsStore';


const Admin = (observer(() => {
  return (
    <>
      {!GlobalState.isAdmin ?
        <Login></Login> :
        <div>
          <header id="detailsToShow">
            {!BusinessDetailsStore.isForEdit ?
              <DetailsToShow />
              : <DetailsToEdit />
            }
          </header>
          {!GlobalState.isMeetingOpen && !GlobalState.isServiceOpen ?
            <div id="buttens">
              <Button variant="outlined" class="b1"><Link to="./services" className='link' onClick={() => GlobalState.setIsServiceOpen(true)}>services</Link></Button>
              <Button variant="outlined " class="b1" ><Link to="./meetings" className='link' onClick={() => GlobalState.setIsMeetingOpen(true)}>meeting</Link></Button>
              <Outlet />
            </div> :
            GlobalState.isMeetingOpen ?
              <div id="buttens">
                <Button variant="outlined" class="b1"><Link to="./services" className='link' onClick={() => GlobalState.setIsServiceOpen(true)}>services</Link></Button>
                <Outlet />
              </div> :
              <div id="buttens">
                <Button variant="outlined" class="b1"><Link to="./meetings" className='link' onClick={() => GlobalState.setIsMeetingOpen(true)}>meeting</Link></Button>
                <Outlet />
              </div>
          }
        </div>

      }
    </>
  )
}))
export default Admin