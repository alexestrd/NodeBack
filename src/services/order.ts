import { Order } from "../interface/order.interface";
import { Ruta } from "../interface/ruta.interface";
import OrderModel from "../models/order";
import { getrouteO } from "../services/routes";
import { gettruck} from "../services/truck"


const neworder = async (data: any, truckD : string, rute : string) => {
  const routeD: Ruta = {
    pickup: {
      lat: "", // Asigna valores iniciales si es necesario
      lng: ""
    },
    dropoff: {
      lat: "", // Asigna valores iniciales si es necesario
      lng: ""
    }
  };
    const truck = await gettruck(truckD);
    if(!truck){ return "El camion no existe en la base de datos";}
    const route = await getrouteO(rute);
    if(route){
      routeD.pickup.lat = route.latA;
  routeD.pickup.lng = route.lngA;
  routeD.dropoff.lat = route.latB;
  routeD.dropoff.lng = route.lngB;
    };
    const newData:Order = {
      tipo: data.tipo,
      descripcion: data.descripcion,
      ruta: routeD,
      status: data.status,
      truck: truckD
    }
    const ResponseNewOrderr = await OrderModel.create(newData);
    return ResponseNewOrderr;
};

const getorders = async () => {
    const response = await OrderModel.find({});
    return response;
  };
  
  const getorder = async (id: string) => {
    const response = await OrderModel.findOne({ _id: id });
    return response;
  };
  
  const updateorder = async (id: string, data: Order, status: string) => {
    if (status != "progreso" ||  "curso") {
        const response = await OrderModel.findOneAndUpdate({ _id: id }, data, {
            new: true,
          });
          return response;
    } else {
        return "No se puede editar una orden en curso";
    }
  };
  
  const deleteorder = async (id: string, status: string) => {
    if (status != "progreso" ||  "curso") {
        const response = await OrderModel.findOneAndRemove({ _id: id });
    return response;
    } else {
        return "No se puede eliminar una orden en progreso o en curso";
    }
  };
  
  export { neworder, getorder, getorders, deleteorder, updateorder};