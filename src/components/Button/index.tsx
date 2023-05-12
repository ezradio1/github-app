import { ButtonProps } from './index.types';

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <button
      className='bg-primary py-2 px-2 min-w-[100px] rounded-sm text-white hover:opacity-70 transition-all font-medium'
      {...props}>
      {children}
    </button>
  );
};

export default Button;
