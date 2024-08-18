import { useLayoutEffect, useState } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(matchMedia(query).matches);

  useLayoutEffect(() => {
    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
    }

    const mediaQuery = matchMedia(query);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
