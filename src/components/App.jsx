import "./App.css"

import Profile from "./Profile/Profile"
import userData from "../userData.json";

import friends from "../friends.json"



import FriendList from "./Friends/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        user={{
          username: userData.username,
          tag: userData.tag,
          location: userData.location,
          avatar: userData.avatar,
          stats: userData.stats,
        }}
      />
      <FriendList friends={friends} />
      <TransactionHistory />
    </>
  );
}

export default App;