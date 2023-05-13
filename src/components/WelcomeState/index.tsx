import Banner from '@/assets/images/welcome_banner.png';

const WelcomeState = () => {
  return (
    <div className='flex flex-col items-center py-16 justify-center'>
      <img src={Banner} alt='error-banner.png' className='w-96' />
      <p className='font-semibold pt-4 text-center'>
        Welcome to the Github App. Please find the user you want!
      </p>
    </div>
  );
};

export default WelcomeState;
