import React from 'react';
import Head from 'next/head';

function LayoutNoContent({ title, icon, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={icon} />
      </Head>
      {children}
    </div>
  );
}

export default LayoutNoContent;