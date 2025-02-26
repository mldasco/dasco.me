import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import {ReactElement} from 'react';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
