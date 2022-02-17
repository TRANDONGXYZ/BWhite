import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';

function LayoutContent(props) {
  const { title, icon, children } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={`/favicons/${icon}.svg`} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutContent;