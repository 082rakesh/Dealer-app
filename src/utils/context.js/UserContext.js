import {createContext} from 'react';

// type User = {
//   loggedInUser: 'Default User',
//   setUserName: (() => {loggedInUser: string}),
// };

export const UserContext = createContext({loggedInUser: 'Default User'});
