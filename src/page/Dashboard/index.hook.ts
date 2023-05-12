import { useState } from 'react';
import useFetchData from '../../hook/useFetchData';
import { Repository, ResponseSearch, User } from './index.types';

const useIndex = () => {
  const [activeKey, setActiveKey] = useState(-1);
  const [search, setSearch] = useState('');
  const [allData, setAllData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState({ list: false, detail: false });
  const [error, setError] = useState({ list: null, detail: null });

  const { getData } = useFetchData();

  const handleClickAccordion = async (key: number, repo: User) => {
    setActiveKey(key === activeKey ? -1 : key);
    if (key !== activeKey) {
      const selectedData = allData.filter((el) => el.id === repo.id)[0];

      if (selectedData.isFirstFetch) {
        setError((prevState) => ({ ...prevState, detail: null }));
        setIsLoading((prevState) => ({ ...prevState, detail: true }));
        const { data, error } = await getData<Repository[]>({
          url: `users/${repo.login}/repos`,
          params: {
            per_page: 10,
          },
        });
        setIsLoading((prevState) => ({ ...prevState, detail: false }));

        if (!error) {
          const updatedData = allData.map((el) => {
            if (el.id === selectedData.id) {
              return {
                ...el,
                repo: data || [],
                isFirstFetch: false,
              };
            }
            return el;
          });
          setAllData(updatedData);
        } else {
          setError((prevState) => ({ ...prevState, detail: error }));
        }
      }
    }
  };

  const handleSearch = async () => {
    setError((prevState) => ({ ...prevState, list: null }));
    setIsLoading((prevState) => ({ ...prevState, list: true }));

    const { data, error } = await getData<ResponseSearch>({
      url: 'search/users',
      params: {
        q: search,
      },
    });
    setIsLoading((prevState) => ({ ...prevState, list: false }));

    if (!error) {
      const normalizedData =
        data?.items.map((el) => {
          return {
            ...el,
            repo: [],
            isFirstFetch: true,
          };
        }) || [];
      setAllData(normalizedData);
    } else {
      setError((prevState) => ({ ...prevState, list: error }));
    }
  };

  return {
    activeKey,
    setActiveKey,
    handleClickAccordion,
    isLoading,
    search,
    setSearch,
    handleSearch,
    allData,
    error,
  };
};

export default useIndex;
