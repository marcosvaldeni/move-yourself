import { createContext, ReactNode, useEffect, useState } from 'react';
import InitModal from '../components/InitModal';
import api from '../services/api';
import Cookies from 'js-cookie';

interface ProfileContextData {
  userData: User;
  setUser: (user:User) => void;
  activeLogin: () => void;
}

interface ProfileProviderProps {
  children: ReactNode;
  username: string;
  avatar_url: string;
  isLogged: boolean;
}

interface User {
  name: string;
  avatar_url: string;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {
  const defaultUser:User = {
    name: 'User Name',
    avatar_url: 'https://avatars.githubusercontent.com/u/2866373?s=400&v=4'
  };

  const [userData, setUserData] = useState<User>({name: rest.username, avatar_url: rest.avatar_url} ?? defaultUser);
  const [isLogged, setIsLogged] = useState(rest.isLogged ? rest.isLogged : false);

  useEffect(() => {
    if (isLogged) {
      Cookies.set('username', String(userData.name));
      Cookies.set('avatar_url', String(userData.avatar_url));
      Cookies.set('isLogged', String(isLogged));
    }
  }, [userData, isLogged]);
  
  const setUser = (user: User) => {
    setUserData(user)
  }

  const activeLogin = () => {
    setIsLogged(true);
  }

  return (
    <ProfileContext.Provider 
      value={{ 
        userData,
        setUser,
        activeLogin
      }}>
      {!isLogged && <InitModal />}
      { children }
    </ProfileContext.Provider>
  );
}
