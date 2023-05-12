import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import ErrorState from '../../components/ErrorState';
import Input from '../../components/Input';
import LoadingState from '../../components/Loading';
import RepositoryCard from '../../components/RepositoryCard/inedx';
import useIndex from './index.hook';

const Dashboard = () => {
  const {
    activeKey,
    handleClickAccordion,
    isLoading,
    search,
    setSearch,
    handleSearch,
    allData,
    error,
  } = useIndex();

  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col p-3 gap-2 w-full max-w-[100vw] md:max-w-[95vw] xl:max-w-[1078px]'>
        <Input value={search} onChange={(evt) => setSearch(evt.target.value)} />
        <Button type='submit' onClick={handleSearch}>
          Search
        </Button>
        <hr className='my-2' />

        {error.list && <ErrorState />}
        {isLoading.list && <LoadingState />}
        {!isLoading.list && (
          <div className='max-h-[calc(100vh-150px)] overflow-y-scroll grid grid-cols-1 gap-1'>
            {allData.map((el, key) => (
              <Accordion
                title={el.login}
                profile={el.avatar_url}
                key={key}
                isExpanded={activeKey === key}
                onClick={() => handleClickAccordion(key, el)}>
                <>
                  {isLoading.detail && activeKey === key ? (
                    <LoadingState />
                  ) : error.detail ? (
                    <ErrorState />
                  ) : (
                    <div className='max-h-72 overflow-y-auto'>
                      {el.repo?.map((detail, keyDetail) => (
                        <RepositoryCard key={keyDetail} {...detail} />
                      ))}
                    </div>
                  )}
                </>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
