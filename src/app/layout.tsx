// app/layout.tsx

import React from 'react';
import './globals.css'; // Import any global CSS if you have it

export const metadata = {
  title: 'Your Site Title',
  description: 'Description of your site',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* You can also add global components like Header, Footer here */}
        {children}
      </body>
    </html>
  );
};

export default Layout;