import { observer } from 'mobx-react';
import './User.css'
import DetailsToShow from '../detailsToShow/DetailsToShow.jsx'
import Services from '../services/Services'



const User = observer(() => {


  return (
    <>
      <DetailsToShow />
      <div id="servicesList">
      <Services />
      
      </div>
    

    </>
  );
})

export default User
