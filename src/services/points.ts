import { Points } from "../interface/points.interface";
import PointsModel from "../models/points";

const getpoints = async () => {
    const response = await PointsModel.find({});
    return response;
  };

  const newpoints = async (data: Points) => {
    const ResponseNewOrderr = await PointsModel.create(data);
    return ResponseNewOrderr;
};

export {getpoints, newpoints};