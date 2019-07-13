import React from 'react';
import { Header } from './header';
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-container">{children}</main>
    </>
  );
};