import { ComponentProps, createElement } from 'react';

type StatisticsProps = {
  accuracy: {
    hit: number;
    miss: number;
  };
} & ComponentProps<'table'>;

export default function Statistics(props: StatisticsProps) {
  const {
    accuracy: { hit, miss },
    ...rest
  } = props;

  return createElement(
    'table',
    rest,
    createElement('tbody', null, [
      createElement('tr', { key: 'tr-hits' }, [
        createElement('td', { key: 'td-hits-label' }, 'Hits:'),
        createElement('td', { key: 'td-hits-data' }, hit),
      ]),
      createElement('tr', { key: 'tr-miss' }, [
        createElement('td', { key: 'td-miss-label' }, 'Miss:'),
        createElement('td', { key: 'td-miss-data' }, miss),
      ]),
    ])
  );
}
