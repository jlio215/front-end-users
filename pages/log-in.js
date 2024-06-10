import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Log In</h1>
      {/* Here you can add your input fields, login button, etc. */}
    </div>
  );
}

// Do not use any layout for the login page
LoginPage.getLayout = (page) => page;

export default LoginPage;