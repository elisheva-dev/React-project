import { observable, makeObservable, action } from 'mobx';

class BusinessDetailsStore {

  business = {
    // name: "Respira",
    // address: "Yafo - Jerusalem",
    // phone: "02-6442222",
    // owners: "owners: 45921",
    // logo: "/images/logo.png",
  }

  isForEdit = false;
  constructor() {
    makeObservable(this, {
      business: observable,
      setBusinessDetails: action,
      initialBusinessDetails: action,
      isForEdit: observable,
      setIsForEdit: action,
      setField: action,
    })
  }
  setIsForEdit = (val) => {
    this.isForEdit = val;
  }
setField = (field, value) => {
  this.business[field] = value;
};

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
      console.log("dtails:", details)
      console.log("busines:", this.business)
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

    if (data && Object.keys(data).length > 0) {
      {
        this.business = data;
      }
      console.log("businessDetails", this.business);
console.log(BusinessDetailsStore.business);

    }
};

  }export default new BusinessDetailsStore();