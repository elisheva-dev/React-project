import './DetailsToShow.css'
import GlobalState from '../global/GlobalState';
import { observer } from 'mobx-react';
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import { useEffect } from "react";

const DetailsToShow = observer(() => {
  useEffect(() => {
    BusinessDetailsStore.initialBusinessDetails()
  }, []);

  return (
    <div className='details-container'>
      <img src={BusinessDetailsStore.business.logo} alt="logo" className='logo' />
      <h1>{BusinessDetailsStore.business.name}</h1>
      <h3>{BusinessDetailsStore.business.address}</h3>
      <h3>{BusinessDetailsStore.business.phone}</h3>
      <h3>{BusinessDetailsStore.business.owners}</h3>
      {GlobalState.isAdmin && (
        <button className="button b" onClick={() => BusinessDetailsStore.setIsForEdit(true)}>for edit</button>
      )}
    </div>
  )
})
export default DetailsToShow
