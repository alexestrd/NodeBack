import { Routes } from "../interface/routes.interface";
import RoutesModel from "../models/routers";

const getroutes = async () => {
    const response = await RoutesModel.find({});
    return response;
  };

  const getroute = async (id: string) => {
    const response = await RoutesModel.findOne({ _id: id });
    return response;
  };

const newroutes = async (data: Routes) => {
    const ResponseNewOrderr = await RoutesModel.create(data);
    return ResponseNewOrderr;
};

const updateroutes = async (id: string, data: Routes) => {
    const response = await RoutesModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return response;
  };

  const deleteroutes = async (id: string) => {
    const response = await RoutesModel.findOneAndDelete({_id: id});
return "Ruta eliminada";
  }

  export { getroute, getroutes, updateroutes, deleteroutes, newroutes};