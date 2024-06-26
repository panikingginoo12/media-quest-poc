import Image from 'next/image';
import oneNetwork from 'public/assets/images/dark/one-network-media-group-logo.png';
import React from 'react';

import SocialImages from './SocialImages';

const TopSocialsOnly = () => {

  return (
    <div className="flex flex-col gap-2.5 md:items-center lg:items-start lg:gap-5 lg:flex-none">
      <div className="flex justify-between lg:flex-col flex-start md:items-center lg:items-start md:gap-4">
        <Image className='lg:mx-2.5 w-[100px] h-[79px] lg:w-[120px] lg:h-[95px]' src={oneNetwork} alt='one network' priority={true} />
        <SocialImages />
      </div>
      <p className='lg:mx-2.5'>2024	&#169; All rights reserved</p>
    </div>
  )
}

export default TopSocialsOnly