import clsx from 'clsx';
import { AccordionProps } from './index.types';

const Accordion = (props: AccordionProps) => {
  const { title, children, isExpanded, onClick, profile } = props;

  return (
    <div className='rounded-lg'>
      <div
        className='flex bg-gray-300 bg-opacity-30 hover:bg-opacity-50 items-center py-3 px-4 transition-all justify-between'
        onClick={onClick}>
        <div className='flex gap-2 items-center'>
            <img src={profile} alt='profile.png' className='w-8 rounded-full' />
          <button className='w-full text-left  font-medium'>{title}</button>
        </div>
        <div>
          <i
            className={clsx('fa fa-chevron-down transition-all duration-500', {
              'rotate-0': isExpanded,
              'rotate-180': !isExpanded,
            })}
          />
        </div>
      </div>
      <div
        className={clsx(
          'overflow-hidden px-4 transition-all duration-500 border-[1px]',
          {
            'max-h-96 py-3': isExpanded,
            'max-h-0': !isExpanded,
          }
        )}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
