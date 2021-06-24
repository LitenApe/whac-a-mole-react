import { useCallback, useEffect, useState } from 'react';
import randomInt from '../utils/randomInt';
import Mole from './Mole';

export enum ClickEvent {
  ESCAPED,
  WHACKED,
}

export default function Game() {
  const [active, setActive] = useState(-1);
  const [accuracy, setAccuracy] = useState({ hit: 0, miss: 0 });

  const prepareNextMole = useCallback(() => {
    setTimeout(() => {
      const next = randomInt(0, 9);
      setActive(() => next);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (active !== -1) {
      timer = setTimeout(() => {
        setActive(() => -1);
        setAccuracy((prev) => ({ ...prev, miss: prev.miss + 1 }));
        prepareNextMole();
      }, 1000);
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const onClick = useCallback((event: ClickEvent) => {
    setAccuracy((prev) => {
      const next = Object.assign({}, prev);

      if (event === ClickEvent.WHACKED) {
        next.hit += 1;
      } else {
        next.miss += 1;
      }

      return next;
    });
    setActive(() => -1);
    prepareNextMole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Array.from({ length: 9 }, (_, i) =>
        Mole({ onClick, key: i, active: active === i })
      )}

      <table>
        <tbody>
          <tr>
            <td>Hit</td>
            <td>{accuracy.hit}</td>
          </tr>
          <tr>
            <td>Miss</td>
            <td>{accuracy.miss}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
