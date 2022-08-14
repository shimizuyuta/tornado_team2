import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
