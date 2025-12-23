import './Meetings.css'
import { useEffect } from 'react'
import { observer } from 'mobx-react';
import Meeting from '../meeting/Meeting';
import MeetingsStore from '../global/MeetingsStore';

const Meetings = (observer(() => {
    
    useEffect(() => {
        MeetingsStore.initMeetings()
    
      }, []);
  
    return (
        <>
            <div id='meetings'>
                {MeetingsStore.meetings.map((_, i) => <Meeting key={i} i={i}/>)}
            </div>
        </>
    )
}))

export default Meetings