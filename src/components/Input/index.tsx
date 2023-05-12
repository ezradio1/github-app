import { InputProps } from './index.types';

const Input = (props: InputProps) => {
  return (
    <input
      className='border-[1px] h-[40px] px-2 focus:outline-none focus:border-primary'
      {...props}
    />
  );
};

export default Input;
