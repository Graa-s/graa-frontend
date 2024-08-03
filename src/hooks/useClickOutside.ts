import { useEffect, type RefObject } from 'react';

type AddEventListenerParameters = Parameters<typeof document.addEventListener<'click'>>;
type Handler = AddEventListenerParameters[1];
type Options = AddEventListenerParameters[2];

function useClickOutside(ref: RefObject<HTMLElement>, handler: Handler, options?: Options) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler.call(document, event);
    }

    document.addEventListener('click', handleClickOutside, options);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, handler, options]);
}

export default useClickOutside;
