import React from 'react';

import LeagueCard from './league-card';
import ScrollButtonLeft from './scroll-button/left';

const Scoreboard = () => {
  return (
    <div className="flex bg-blue-001 px-5 py-[15px] dark:bg-dark-003">
      <div className="grid w-full grid-flow-col justify-center gap-1">
        {/* <ScrollButtonLeft /> */}
        <LeagueCard league="pba" />
        <LeagueCard league="nba" />
        <LeagueCard league="uaap" />
      </div>
    </div>
  );
};

export default Scoreboard;
