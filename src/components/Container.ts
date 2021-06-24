import { ComponentProps, createElement } from 'react';

export default function Container(props: ComponentProps<'div'>) {
  return createElement('div', props);
}
