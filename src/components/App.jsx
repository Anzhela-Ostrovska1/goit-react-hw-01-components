import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Data } from 'components/Data/Data';
import { FriendList } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/Transactions/Transactions';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import css from 'components/Container.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Data title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
