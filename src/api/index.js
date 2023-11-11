import axios from 'axios';





export const getPlacesData = async(type,sw,ne) => {
    try{
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,  {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '7cab8f22b7mshed4e0c97060d20dp175fa2jsn4150b9e8ae35',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
          });
        return data;
    }
    catch(error){
     console.log(error);
    }
}