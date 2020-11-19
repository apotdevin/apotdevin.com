import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const isClient = typeof window === 'object';

export interface State {
  x: number;
  y: number;
}

const useWindowScroll = (): State => {
  const [state, setState] = useState<State>({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    };

    const debounced = debounce(handler, 100, {
      leading: true,
      trailing: true,
    });

    window.addEventListener('scroll', debounced, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', debounced);
    };
  }, []);

  return state;
};

export default useWindowScroll;
