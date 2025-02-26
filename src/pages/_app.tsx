import '../globalStyles.scss';
import 'tailwindcss/tailwind.css';

import type {AppProps} from 'next/app';
import {memo,ReactElement} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
