// Layout.js
import React from 'react';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* Header content */}
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
