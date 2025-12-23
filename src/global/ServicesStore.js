import { observable, makeObservable, action } from 'mobx';
class ServicesStore {
  services = [{ name: "סופש חלומי", description: "סופש זוגי בסויטה במלון", price: 4000 }, { name: "סופש חלומי", description: "סופש זוגי בסויטה במלון", price: 4000 }]
  constructor() {
    makeObservable(this, {
      services: observable,
      addService: action,
      initServices: action
    })
  }
  addService = async (service) => {
    const response = await fetch("https://businessmeet.onrender.com/service", {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },

    }
    );

    // console.log(response.status)
    if (response.status === 200) {
      this.services.push(service);

    }
  }
  initServices = async () => {
    console.log("initial2 called")
    const response = await fetch("https://businessmeet.onrender.com/services",
      {
        method: "GET",
      })
    const data = await response.json();
    console.log(data.length==0)
    // if (data.length!=0)
      this.services = data;
    // else {
    //   this.services.forEach(element => {
    //     this.addService(this.services[element])
    //   });
    // }

    console.log("services", this.services);
  };

}
export default new ServicesStore()