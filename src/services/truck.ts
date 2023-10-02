import { Truck } from "../interface/trucks.interface";
import TruckModel from "../models/trucks";

const gettrucks = async () => {
    const response = await TruckModel.find({});
    return response;
  };

const newtruck = async (data: Truck) => {
    const ResponseNewOrderr = await TruckModel.create(data);
    return ResponseNewOrderr;
};

  export { gettrucks, newtruck};