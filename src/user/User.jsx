import Dialog from '@mui/material/Dialog';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { observer } from 'mobx-react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './User.css'
import DetailsToShow from '../detailsToShow/DetailsToShow.jsx'
import Services from '../services/Services'
import Button from '@mui/material/Button';
import ServicesStore from '../global/ServicesStore';
import MeetingsStore from '../global/MeetingsStore';



const User = (observer(() => {
  useEffect(() => {
    MeetingsStore.initMeetings()

  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [clientName, setclientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const service = {
      serviceType,
      dateTime,
      clientName,
      clientPhone,
      clientEmail
    }
    MeetingsStore.addMeeting(service);
    setIsOpen(false)


  }

  const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');

    setDateTime(formattedDateTime);
  }
  return (
    <>
      <div id='detailsToShow' className='header'><DetailsToShow /></div>
      <div id="servicesList"><Services /></div>
       <Fab onClick={() => setIsOpen(true)} aria-label="edit" id="add">
            <AddIcon fontSize="large"/>
          </Fab>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>  </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="Form">
            <br />
            <TextField
              id="outlined-select-currency"
              select
              label="service  type"
              sx={{ m: 1, width: '25ch' }}
              defaultValue="setServiceType"
              // helperText="Please select your currency"
              onChange={(e) => setServiceType(e.target.value)}
            >
              {ServicesStore.services.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <br />
          

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
               sx={{ m: 1, width: '25ch' }}
                renderInput={() => (
                  <TextField
                    variant="outlined"
                    className="inputs"
                    name="dateTime"
                    label="Meeting Date and Time"

                  />
                )}
                onChange={handleDateTimeChange}

                disablePast
                required
              />
            </LocalizationProvider>
            <br />
            <TextField
              label="client name"
              id="outlined-start-adornment"
              onChange={(e) => setclientName(e.target.value)}
              sx={{ m: 1, width: '25ch' }}
            />
            <br />
            <TextField
              label="client phone"
              id="outlined-start-adornment"
              onChange={(e) => setClientPhone(e.target.value)}
              sx={{ m: 1, width: '25ch' }}
            />
            <br />
            <TextField
              label="client amail"
              id="outlined-start-adornment"
              onChange={(e) => setClientEmail(e.target.value)}
              sx={{ m: 1, width: '25ch' }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}))

export default User
