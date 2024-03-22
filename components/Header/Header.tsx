'use client';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useMemo } from 'react';

import ConnectWalletButton from '@/lib/web3/components/ConnectWalletButton';
import ToggleMenu from '@/public/img/menu.svg';

import Image from 'next/image';

import type { FC } from 'react';

export const Header: FC = () => {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  const onLogo = useCallback(() => {
    router.push('/');
  }, []);

  const logoElement = useMemo(() => {
    return (
      <>
        <Image
          className='cursor-pointer'
          src='/img/Logo.svg' 
          width={200} 
          height={83}
          alt='logo'
          priority
          onClick={onLogo}
        />
      </>
    );
  }, []);

  return (
    <div className={`z-10 fixed w-full flex items-center py-6 bg-black/40 backdrop-blur-sm ${toggle?'rounded-b-xl':'rounded-b-none'}`}>
      <div className='max-w-screen-xl w-full flex flex-wrap justify-between items-center mx-auto px-4'>
        { logoElement }
        <div className='flex gap-4 lg:order-2'>
          <ConnectWalletButton  />
          <button className='lg:hidden' onClick={() => setToggle(!toggle)}>
            <ToggleMenu />
          </button>
        </div>
        <div className={`w-full lg:w-auto ${toggle?'flex':'hidden lg:flex'} items-center gap-10 lg:order-1`}>
          <ul className='w-full flex flex-col lg:flex-row lg:gap-8 mt-4 lg:mt-0 divide-y-[1px] divide-slate-700 lg:divide-y-0 text-white text-xl font-thin'>
            {
              ['Private Sale', 'Swap', 'Farming', 'Refferal', 'White Paper'].map((item, index) => {
                return (
                  <li className='py-2' key={index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;