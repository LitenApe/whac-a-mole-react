import { useEffect } from 'react';

export default function useMount(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
  return null;
}
