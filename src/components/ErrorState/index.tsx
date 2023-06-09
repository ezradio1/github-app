import Banner from '@/assets/images/error_banner.png';

const ErrorState = () => {
  return (
    <div className='flex flex-col items-center py-16 justify-center'>
      <img src={Banner} alt='error-banner.png' className='w-96' />
      <p className='font-semibold pt-4'>An error occurred, please try again later!</p>
    </div>
  );
};

export default ErrorState;
