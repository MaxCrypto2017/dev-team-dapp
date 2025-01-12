import {twMerge} from 'tailwind-merge';

const CardHeader = ({id, min, max, varient='small'}) => {
  return (
    <div className='flex gap-2 lg:gap-4'>
      <div className='flex justify-center items-center'>
        <img 
          className={twMerge(
            'w-6 lg:w-14 transform scale-x-[-1]',
            varient==='large' && 'w-10 lg:w-16'
          )} 
          src='/img/Intelligence.svg' alt='' 
        />
      </div>
      <div className='grow'>
        <div className='w-full flex justify-between'>
          <span className={twMerge(
            'text-shadow-green text-[8px] lg:text-[24px] text-[#00FF47] font-semibold',
            varient==='large' && 'text-shadow-green text-[18px] lg:text-[36px] '
          )}>
            RFT FARM #{id}
          </span>
          <div className='flex justify-center items-center'>
            <div className='w-4 h-4 lg:w-6 lg:h-6 flex justify-center items-center border text-center text-[#00FF47] rounded-full'>?</div>
          </div>
        </div>
        <div className='mt-1'>
          <div className='flex justify-between'>
            <span>MIN</span>
            <span>{min}$</span>
          </div>
          <div className='flex justify-between'>
            <span>MAX</span>
            <span>{max}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;