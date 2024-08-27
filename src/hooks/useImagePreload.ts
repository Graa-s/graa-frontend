import { useEffect, useState } from 'react';

function useImagePreload(src: string | string[]) {
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  useEffect(() => {
    let promise: Promise<HTMLImageElement | HTMLImageElement[]>;

    if (typeof src === 'string') promise = preloadImage(src);
    else promise = Promise.all(src.map((src: string) => preloadImage(src)));

    promise.then(() => setIsPreloaded(true));
  }, [src, isPreloaded]);

  return isPreloaded;
}

function preloadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = image.onabort = () => reject({ image, src });

    image.src = src;
  }).catch((error) => {
    console.error('Failed to preload src: ' + error.src);
    return error.image;
  });
}

export default useImagePreload;
