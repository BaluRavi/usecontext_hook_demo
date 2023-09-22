import { AppContext } from '../App'
import { useContext } from 'react';

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Home Page and the user is : {username} </h1>
    </div>
  );
};
