'use client';

import { Fragment, memo } from 'react';
import Image from 'next/image';
import pic from '../../public/loader.svg'
import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  if (hideLoader) return;

  return (
    <section ref={ref} className={styles.loader}>
      <div>
            <Image src={pic} alt='Next' width={100}/>
            {/* <span>B</span>
            <span>O</span>
            <span>N</span>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>R</span> */}

      </div>
    </section>
  );
});

export default Loader;
