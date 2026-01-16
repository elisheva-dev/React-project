import '../detailsToShow/DetailsToShow.css'
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';

const DetailsToEdit = observer(() => {

  
  // const [name, setName] = useState(BusinessDetailsStore.business.name);
  // const [logo, setLogo] = useState(BusinessDetailsStore.business.logo);
  // const [address, setAddress] = useState(BusinessDetailsStore.business.address);
  // const [phone, setPhone] = useState(BusinessDetailsStore.business.phone);
  // const [owners, setOwners] = useState(BusinessDetailsStore.business.owners);

const handleSubmit = (e) => {
  e.preventDefault();
  BusinessDetailsStore.setBusinessDetails(BusinessDetailsStore.business);
};

  return (
    <>
       <form className="details-container" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" align-items="center" sx={{ gap: { xs: 0.2, sm: 1, md: 2 } }}>
        <TextField value={BusinessDetailsStore.business.name} variant="standard" onChange={(e) => BusinessDetailsStore.setField("name" , e.target.value)} />
        <TextField value={BusinessDetailsStore.business.address} variant="standard" onChange={(e) =>BusinessDetailsStore.setField("address" , e.target.value)} />
        <TextField value={BusinessDetailsStore.business.phone} variant="standard" onChange={(e) => BusinessDetailsStore.setField("phone" , e.target.value)}/>
        <TextField value={BusinessDetailsStore.business.owners} variant="standard" onChange={(e) => BusinessDetailsStore.setField("owners" , e.target.value)} />
        <TextField value={BusinessDetailsStore.business.logo} variant="standard" onChange={(e) => BusinessDetailsStore.setField("logo" , e.target.value)} />
        <button type="submit" className="button b">save</button>
   </Box>
      </form>
    </>
  )
});

export default DetailsToEdit;
