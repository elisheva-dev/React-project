import './DetailsToShow.css'
import Button from '@mui/material/Button';
import GlobalState from '../global/globalState';
import { observer } from 'mobx-react';
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import { useEffect } from "react";

const DetailsToShow = (observer(()=> {
  useEffect(() => {
    BusinessDetailsStore.initialBusinessDetails()
  }, []);

  return (
    <>
<img src={BusinessDetailsStore.business.logo} alt="logo" className='logo'/>
<h1>{BusinessDetailsStore.business.name}</h1>
<h2>{BusinessDetailsStore.business.address}</h2>
<h3>{BusinessDetailsStore.business.phone}</h3>
<h3>{BusinessDetailsStore.business.owners}</h3>
{GlobalState.isAdmin ?
<Button variant="text" class="botton" onClick={()=>BusinessDetailsStore.setIsForEdit(true)}>for edit</Button>:undefined
}
    </>
  )
}))

export default DetailsToShow
