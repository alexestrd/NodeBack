import axios from 'axios';

const dist = async (pointA : string,pointB: string) => {
try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const origin = pointA;
    const destination = pointB;
    const apiUrl= `https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:${encodeURIComponent(origin)}&destinations=place_id:${encodeURIComponent(destination)}&key=${apiKey}`;
        const response = await axios.get(apiUrl);

        if (response.status == 200) {

            const distancia: string = await response.data.rows[0].elements[0].distance.text;
            return distancia;
        } else {
            console.log("Error en API Maps")
        }
} catch (e) {
    console.error("Error al relaizar la solicitud: ", e)
}
};

const place = async (placeId: string) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cgeometry&place_id=${placeId}&key=${apiKey}`
        );
    
        if (response.data.status === 'OK') {
          // Los detalles de la ubicación se encuentran en response.data.result
          const locationDetails= await response.data.result;
          const location = locationDetails.geometry.location;
          const lat = location.lat;
          const lng = location.lng;
          return {lat, lng};
        } else {
          console.error('Error al obtener los detalles de la ubicación:', response.data.status);
        }
      } catch (e) {
        console.error('Error al realizar la solicitud:');
      }
    }
    




export {dist, place};