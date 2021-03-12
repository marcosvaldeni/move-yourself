import { createContext, ReactNode, useEffect, useState } from 'react';
import InitModal from '../components/InitModal';
import api from '../services/api';

interface ProfileContextData {
  userData: User;
  setUser: (user:User) => void;
  activeLogin: () => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  avatar_url: string;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [userData, setUserData] = useState<User>();
  const [isLogged, setIsLogged] = useState(false);

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
