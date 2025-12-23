import '../detailsToShow/DetailsToShow.css'
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';
import { useState } from 'react';

const DetailsToEdit = observer(() => {

  const [name, setName] = useState(BusinessDetailsStore.business.name);
  const [logo, setLogo] = useState(BusinessDetailsStore.business.logo);
  const [address, setAddress] = useState(BusinessDetailsStore.business.address);
  const [phone, setPhone] = useState(BusinessDetailsStore.business.phone);
  const [owners, setOwners] = useState(BusinessDetailsStore.business.owners);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(logo)
    const data = {
      name,
      address,
      phone,
      owners,
      logo
    }
    if (name != "" && address != "" && phone != "" && owners != "" && logo != "")
      BusinessDetailsStore.setBusinessDetails(data);

  }

  return (
    <>

      <form style={{ display: 'flex', alignItems: 'flex-end' }} onSubmit={handleSubmit}>
        <div className='logo'>
          <TextField defaultValue={logo} variant="standard" label="business logo" onChange={(e) => setLogo(e.target.value)} />
        </div>
        <h1>
          <TextField defaultValue={name} variant="standard" label="business name" onChange={(e) => setName(e.target.value)} />
        </h1>
        <h2>
          <TextField defaultValue={address} variant="standard" label="business address" onChange={(e) => setAddress(e.target.value)} />
        </h2>
        <h2>
          <TextField defaultValue={phone} variant="standard" label="business phone" onChange={(e) => setPhone(e.target.value)} />
        </h2>
        <h3>
          <TextField defaultValue={owners} variant="standard" label="business owners" onChange={(e) => setOwners(e.target.value)} />
        </h3>
        <Button variant="text" type="submit" class="botton">save</Button>
      </form>
    </>
  )
});

export default DetailsToEdit;
