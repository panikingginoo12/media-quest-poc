
import Image from 'next/image';
import React from 'react';

import BottomSocialsOnly from './socials-only/BottomSOcialsOnly';
import TopSocialsOnly from './socials-only/TopSocialsOnly';

const Footer = () => {
  return (
    <div className='dark:text-light-main flex flex-col gap-5'>
      <div className="bg-light-main dark:bg-dark-main py-5 lg:py-10 px-2.5 lg:px-[60px] flex flex-col lg:flex-row lg:gap-[30px]">
        <TopSocialsOnly />
        <div className="flex mt-5 lg:mt-0 gap-5 md:flex-1 md:justify-center">
          <div className="flex flex-col gap-[15px] md:w-[260px]">
            <span className='text-blue-main dark:text-yellow-main uppercase text-lg font-bold lg:text-[28px]'>Leagues</span>
            <ul className='text-dark-000 dark:text-light-003 flex flex-col gap-2 text-[15px] lg:text-base font-medium'>
              <li>Gilas</li>
              <li>NBA</li>
              <li>PBA</li>
              <li>UAAP</li>
              <li>PVL</li>
              <li>Esports</li>
              <li>More Sports</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px] md:w-[260px]">
            <span className='text-blue-main dark:text-yellow-main uppercase text-lg font-bold lg:text-[28px]'>Categories</span>
            <ul className='text-dark-000 dark:text-light-003 flex flex-col gap-2 text-[15px] lg:text-base font-medium'>
              <li>News</li>
              <li>Sports Life</li>
              <li>Features</li>
              <li>Videos</li>
              <li>Photos</li>
              <li>Game Schedules</li>
              <li>Channel Schedules</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px] md:w-[260px]">
            <span className='text-blue-main dark:text-yellow-main uppercase text-lg font-bold lg:text-[28px]'>Information</span>
            <ul className='text-dark-000 dark:text-light-003 flex flex-col gap-2 text-[15px] lg:text-base font-medium'>
              <li>About Us</li>
              <li>Authors</li>
              <li>Contact Us</li>
              <li>UAAP</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-light-main dark:bg-dark-main py-5 px-2.5">
        <BottomSocialsOnly />
      </div>
    </div>
  )
}

export default Footer
