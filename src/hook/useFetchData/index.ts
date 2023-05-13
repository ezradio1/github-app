import axios, { AxiosResponse } from 'axios';
import { UseFetchDataProps } from './index.types';

const useFetchData = () => {
  const fetchData = async <T>({ url, params }: UseFetchDataProps<T>) => {
    try {
      const headers = {
        Authorization: `Token ${process.env.REACT_APP_ACCESS_TOKEN}`,
      };
      
      const response: AxiosResponse<T> = await axios(
        `${process.env.REACT_APP_API_URL}${url}`,
        { params, headers }
      );

      return { error: null, data: response.data };
    } catch (error: any) {
      return { error: error, data: null };
    }
  };

  return { getData: fetchData };
};

export default useFetchData;
