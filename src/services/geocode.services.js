import axios from 'axios';

const geocodingServices = {};

geocodingServices.getLatlng = async (destination, API_KEY) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+destination+'&key='+API_KEY);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default geocodingServices;