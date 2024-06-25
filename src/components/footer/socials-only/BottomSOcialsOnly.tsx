import Image from 'next/image';
import oneNetwork from 'public/assets/images/dark/one-network-media-group-logo.png';
import React from 'react';

import SocialImages from './SocialImages';

const BottomSocialsOnly = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2.5 md:gap-[50px] md:justify-center md:items-center lg:gap-5 lg:flex-none">
      <div className="flex justify-between flex-start md:items-center md:gap-[50px]">
        <div className='relative w-[100px] h-[79px] lg:w-[126px] lg:h-[100px] lg:mx-2.5'>
          <Image
            src={oneNetwork}
            layout="fill"
            objectFit="contain"
            alt='one network'
          />
        </div>
        <SocialImages />
      </div>
      <p className='lg:mx-2.5'>2024	&#169; All rights reserved</p>
    </div>
  )
}

export default BottomSocialsOnly