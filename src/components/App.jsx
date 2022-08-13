import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Stats/Stats';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';
import user from './UserProfile/User.json';
import data from './Stats/Data.json';
import friends from './FriendList/Friends.json';
import transactions from './TransactionsHistory/Transactions';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './box';


export const App = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <UserProfile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Box>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
      <GlobalStyle/>
    </>
  );
};
