import axios, { AxiosResponse } from 'axios';
import { UseFetchDataProps } from './index.types';

const useFetchData = () => {
  const fetchData = async <T>({ url, params }: UseFetchDataProps<T>) => {
    try {
      const access_token = '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';
      const headers = {
        Authorization: `Token ${access_token}`,
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
