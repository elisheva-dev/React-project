import { observable, makeObservable, action } from 'mobx';

class GlobalState {
  isAdmin=false;
  isServiceOpen=false;
  isMeetingOpen=false;

    constructor() {
        makeObservable(this, {
            isAdmin:observable,
            setIsAdmin:action,
            isServiceOpen:observable,
            isMeetingOpen:observable,
            setIsServiceOpen:action,
            setIsMeetingOpen:action
        })
    }

    setIsAdmin= (val) => {
        this.isAdmin = val;
    }
    setIsServiceOpen= (val) => {
        this.isServiceOpen = val;
        if(val)
        this.isMeetingOpen=false;
    }
    setIsMeetingOpen= (val) => {
        this.isMeetingOpen = val;
        if(val)
        this.isServiceOpen=false;
    }
 



    



}

export default new GlobalState();