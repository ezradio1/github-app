import Banner from '@/assets/images/empty_banner.png';

const EmptyState = () => {
  return (
    <div className='flex flex-col items-center py-16 justify-center'>
      <img src={Banner} alt='error-banner.png' className='w-96' />
      <p className='font-semibold pt-4'>
        The data you are looking for could not be found!
      </p>
    </div>
  );
};

export default EmptyState;
