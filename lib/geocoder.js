// /lib/geocoder.js
import axios from 'axios';

const POSITIONSTACK_KEY = process.env.POSITIONSTACK_API_KEY;

export async function geocodeLocation(location) {
  try {
    const response = await axios.get('http://api.positionstack.com/v1/forward', {
      params: {
        access_key: POSITIONSTACK_KEY,
        query: location,
        limit: 1
      }
    });

    const data = response.data.data?.[0];
    if (data) {
      return {
        latitude: data.latitude,
        longitude: data.longitude
      };
    }
  } catch (error) {
    console.error('Geocoding error:', error.message);
  }

  return { latitude: null, longitude: null };
}
