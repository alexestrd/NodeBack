import { Routes } from "../interface/routes.interface";
import RoutesModel from "../models/routers";
import {dist, place} from '../utils/maps';

const urlMaps = "https://maps.googleapis.com/maps/api/place/details/json?fields=name%foplace_id=ChIJiQPXwtk0o5URj2cW455eew4&key=AIzaSyAOqBSlDpfN-7xaIJNw8CLaXGZG9VjonQk";

const getroutes = async () => {
    const response = await RoutesModel.find({});
    return response;
  };

  const getroute = async (id: string) => {
    const response = await RoutesModel.findOne({ _id: id });
    return response;
  };

const newroutes = async (data: Routes, pointA : string, pointB : string) => {
    let latA: string | undefined;
    let lngA: string | undefined;
    let latB: string | undefined;
    let lngB: string | undefined;
    const puntoA = await place(pointA);
    if(puntoA){
      latA = puntoA.lat;
      lngA = puntoA.lng;
    }
    const puntoB = await place(pointB);
    if(puntoB){
      latB = puntoB.lat;
      lngB = puntoB.lng;
    }
    const distancia = await dist(pointA, pointB);
    console.log(distancia, latA, lngA );
    const newData:Routes ={
        name: data.name,
        pointA: data.pointA,
        pointB: data.pointB,
        latA: latA,
        lngA: lngA,
        latB: latB,
        lngB: lngB,
        dist: distancia
    }
    console.log(newData);
    const ResponseNewOrderr = await RoutesModel.create(newData);
    return ResponseNewOrderr;
};

const updateroutes = async (id: string, data: Routes) => {
    const response = await RoutesModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return response;
  };

  const deleteroutes = async (name: string) => {
    const response = await RoutesModel.findOneAndDelete({name});
return "Ruta eliminada";
  }

  const getrouteO = async (name: string) => {
    const response = await RoutesModel.findOne({name});
    return response;
  };

  export { getroute, getroutes, updateroutes, deleteroutes, newroutes, getrouteO};