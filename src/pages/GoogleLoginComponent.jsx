// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';

// const GoogleLoginComponent = ({ onLoginSuccess }) => {
//   const handleSuccess = (response) => {
//     const token = response.credential;
//     const decoded = jwt_decode(token);
//     console.log('Google Login Success:', decoded);
//     onLoginSuccess(token);
//   };

//   const handleFailure = (error) => {
//     console.log('Google Login Failed:', error);
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleSuccess}
//       onError={handleFailure}
//     />
//   );
// };

// export default GoogleLoginComponent;


import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onLoginSuccess }) => {
  const handleSuccess = (response) => {
    console.log('Google login response:', response);
    onLoginSuccess(response.credential);
  };

  const handleFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
