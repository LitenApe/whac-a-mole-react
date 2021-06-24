import { createElement } from 'react';
import { DynamicProps, HTMLTags } from '../utils/DynamicProps';

export default function Container<T extends HTMLTags = 'div'>(
  props: DynamicProps<T>
) {
  const { as = 'div', ...rest } = props;
  return createElement(as, rest);
}
