import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import useIndex from './index.hook';
import Input from '@/components/Input';
import WelcomeState from '@/components/WelcomeState';
import EmptyState from '@/components/EmptyState';
import ErrorState from '@/components/ErrorState';
import LoadingState from '@/components/Loading';
import RepositoryCard from '@/components/RepositoryCard/inedx';

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
    isDataNotFound,
    isFirstLoad,
  } = useIndex();

  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col p-3 gap-2 w-full max-w-[100vw] md:max-w-[95vw] xl:max-w-[1078px]'>
        <Input
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <Button type='submit' onClick={handleSearch}>
          Search
        </Button>
        <hr className='my-2' />

        {isFirstLoad && <WelcomeState />}
        {isDataNotFound && <EmptyState />}

        {error.list ? (
          <ErrorState />
        ) : isLoading.list ? (
          <LoadingState />
        ) : (
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
