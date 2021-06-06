import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsfolow={user.stats.followers}
        statsviews={user.stats.views}
        statslike={user.stats.likes}
      />

      <Statistics stats={statData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
