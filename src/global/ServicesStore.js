import { observable, makeObservable, action } from 'mobx';
class ServicesStore {
  services = []
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
  });

  if (!response.ok) return;

  const savedService = await response.json();
  this.services.push(savedService);
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
console.log("services array:", this.services);
console.log("is array:", Array.isArray(this.services));
console.log("length:", this.services.length);

    console.log("services", this.services);
  };

}
export default new ServicesStore()