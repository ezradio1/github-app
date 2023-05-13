import Loader from "@/assets/icon/IcLoader";

const LoadingState = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <Loader />
      <p className='text-xs text-gray-400'>loading...</p>
    </div>
  );
}

export default LoadingState