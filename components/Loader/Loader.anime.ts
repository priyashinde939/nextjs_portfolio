import { useRef, useState } from 'react';

import { gsap, useGSAP } from '../../utils/gsap';

export const useLoaderAnime = () => {
  const loaderRef = useRef<HTMLElement>(null);
  const [hideLoader, setHideLoader] = useState<boolean>(false);

  useGSAP(
    () => {
      const loader = sessionStorage.getItem('hideLoader');
      if (loader) {
        setHideLoader(true);
        return;
      }

      gsap
        .timeline()
        .to('div', {
          autoAlpha: 1
        })
        .from('Image', {
          opacity: 1,
        })
        // Loader FadeOut Animation
        .to(
          loaderRef.current,
          {
            autoAlpha: 0,
            ease: 'none',
            duration: 0.5,
            onComplete: () => {
              sessionStorage.setItem('hideLoader', 'true');
              setHideLoader(true);
            }
          },
          '-=1'
        );
    },
    { scope: loaderRef, dependencies: [] }
  );

  return { ref: loaderRef, hideLoader };
};
