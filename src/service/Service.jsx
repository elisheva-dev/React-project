import './Service.css'
import ServicesStore from '../global/ServicesStore'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import MeetingsStore from '../global/MeetingsStore';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react'
import { CardActionArea } from '@mui/material';
import { observer } from 'mobx-react';

const Service = observer(({ i }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [serviceType] = useState(ServicesStore.services[i].name);
    const [dateTime, setDateTime] = useState(null);
    const [clientName, setClientName] = useState("");
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
        if (!dateTime) return;
        setDateTime(dateTime.format('YYYY-MM-DDTHH:mm:ss'));
    }
    return (
        <>
            <Card sx={{ width: 230 }} elevation={3} className='service' onClick={() => setIsOpen(true)}>
                <CardActionArea>
                    <CardMedia component="img" height="145 "
                        image={BusinessDetailsStore.business.logo} alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ServicesStore.services[i].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ServicesStore.services[i].description}<br />price: {ServicesStore.services[i].price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle> {ServicesStore.services[i].name} </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                sx={{ m: 1, width: '25ch' }}
                                label="Meeting Date and Time"
                                onChange={handleDateTimeChange}
                                disablePast
                            />

                        </LocalizationProvider>
                        <br />
                        <TextField
                            label="client name" onChange={(e) => setClientName(e.target.value)}
                            sx={{ m: 1, width: '25ch' }} />
                        <br />
                        <TextField
                            label="client phone"
                            onChange={(e) => setClientPhone(e.target.value)}
                            sx={{ m: 1, width: '25ch' }}
                        />
                        <br />
                        <TextField
                            label="client email"
                            onChange={(e) => setClientEmail(e.target.value)}
                            sx={{ m: 1, width: '25ch' }}
                        />
                        <DialogActions>
                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={!dateTime}>Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </>
    )
})

export default Service