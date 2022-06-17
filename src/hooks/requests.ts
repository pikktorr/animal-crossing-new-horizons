import axios from "axios";

export const getVillagers = async <T>(): Promise<T> => {
  // try {
    const villagersResponse = await axios.get('https://acnhapi.com/v1a/villagers');
    return villagersResponse?.data;
  // } catch (error) {
  //   console.log('error: ', error);
  // }
};