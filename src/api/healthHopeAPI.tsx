import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = "http://192.168.115.110:8080/api";

const healthHopeAPI = axios.create({baseURL});

healthHopeAPI.interceptors.request.use(
    async( config )  => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error)
      }
)

export default healthHopeAPI;