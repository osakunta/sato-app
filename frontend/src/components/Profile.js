import React, { useState } from 'react';
import { useAuth0 } from '../utils/auth0';

const Profile = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState('');
  const { loading, user, getTokenSilently } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }


  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch(`${process.env.REACT_APP_API_URL}/gallery/authorized`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      const responseData = await response.json();

      console.log(responseData);
      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>

      <h1>External API</h1>
      <button type="button" onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default Profile;
