import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export const Auth = () => {
  
    return (
        <Authenticator signUpAttributes={[
          'nickname'
        ]}>
            {({ signOut, user }) => (
              <main>
                <UserDetails></UserDetails>
                <h1>Hello {user?.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
        </Authenticator>
    );
}; 

function UserDetails(){
  const [nickName, setNickName] = useState('');
  useEffect(() => {
    async function getUserData(){
      const userData = await fetchUserAttributes();
      setNickName(userData.nickname ?? '');
    }
    getUserData();
  }, []);
  return <div><h1>Hello {nickName}</h1></div>
}