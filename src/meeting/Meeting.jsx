import './Meeting.css'
import Card from '@mui/material/Card';
import MeetingsStore from '../global/MeetingsStore';
import PropTypes from 'prop-types';

Meeting.propTypes = {
  i: PropTypes.number.isRequired, // כאן אתה מגדיר את סוג הפרופס 'i' כ-number
};
function Meeting({ i }) {
    const getMeetingColor = (dateTime) => {
        const today = new Date();
        const meetingDate = new Date(dateTime);
    
        const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
       if(  diffDays<0) 
        return 'non'
    else
        if (diffDays===1) {
          return 'red'; // היום
        } else if (diffDays <= 7) {
          return 'orange'; //השבוע
        } 
        else if (diffDays >=7) 
        {
          return 'green'; // עתיד
        }
      };
    return (
        <>
            <Card elevation={3} sx={{ maxWidth: 200 }} className={`meeting ${getMeetingColor(MeetingsStore.meetings[i].dateTime)}`}>
                <div>{MeetingsStore.meetings[i].serviceType}</div><br />
                <div>{MeetingsStore.meetings[i].dateTime}</div><br />
                <div>{MeetingsStore.meetings[i].clientName}</div><br />
                <div>{MeetingsStore.meetings[i].clientPhone}</div><br />
                <div>{MeetingsStore.meetings[i].clientEmail}</div>
            </Card>
        </>
    )
}

export default Meeting