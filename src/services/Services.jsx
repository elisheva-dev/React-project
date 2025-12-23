import { observer } from 'mobx-react';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useEffect } from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Fab from '@mui/material/Fab';
import './Services.css'
import Service from '../service/Service';
import ServicesStore from '../global/ServicesStore'
import GlobalState from '../global/globalState';

const Services = (observer(() => {
    useEffect(() => {
        ServicesStore.initServices()

      }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const service = {
            name,
            description,
            price
        }
        ServicesStore.addService(service);
        setIsOpen(false)


    }
    console.log("servies", ServicesStore.services[1])
    return (

        <>
            <div id='services'>
                {ServicesStore.services.map((_, i) => <Service key={i} i={i} />)}
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  Adding a service</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <TextField  variant="standard" label="service name" onChange={(e) => setName(e.target.value)} /><br/>
                        <TextField variant="standard" label="service description" onChange={(e) => setDescription(e.target.value)} /><br/>
                        <TextField variant="standard" label="service price" onChange={(e) => setPrice(e.target.value)} />

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
            {GlobalState.isAdmin ?
           
            <Fab onClick={() => setIsOpen(true)} aria-label="edit" id="add">
            <AddIcon fontSize="large"/>
          </Fab>:undefined
             }
            </>
    );

}))
export default Services