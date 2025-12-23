import { observable, makeObservable, action } from 'mobx';

class BusinessDetailsStore{
    business = {
        id: "123",
        name: "respira",
        address: "Yafo - Jerusalem",
        phone: "02-6442222",
        owners: "owners: 45921",
        logo: "../images/logo.PNG",
        description: "",
    };
    isForEdit=false;
    constructor() {
        makeObservable(this, {
            business:observable,
            setBusinessDetails:action,
            initialBusinessDetails:action,
            isForEdit:observable,
            setIsForEdit:action,            
        })
    }
    setIsForEdit= (val) => {
        this.isForEdit = val;
    }
    setBusinessDetails = async (details) => {
        
        const response = await fetch("https://businessmeet.onrender.com/businessData", {
          method: "PUT",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
         
        }
        );
    
        if (response.status === 200) {
          this.business = details;
          console.log("dtails:",details)
          console.log("busines:",this.business)
        }
        this.setIsForEdit(false);
        
      };
    

    initialBusinessDetails = async () => {
        console.log("initial called     ")
        const response = await fetch("https://businessmeet.onrender.com/businessData",
        {
            method: "GET",
          })
        const data = await response.json();
        if(data.name!=undefined)
        {
          this.business = data;
        }
        else{
          this.setBusinessDetails(this.business)
        }
        console.log("data",data.name==undefined);
        
        console.log("businessDetails", this.business);
      };
    

}export default new BusinessDetailsStore();