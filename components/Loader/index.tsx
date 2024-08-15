'use client';

import { memo } from 'react';
import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  if (hideLoader) return;

  return (
    <section ref={ref} className={styles.loader}>
      <div className='bg-gray-700 h-full'>
      </div>
    </section>
  );
});

export default Loader;
