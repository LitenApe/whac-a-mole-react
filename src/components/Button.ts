import { ComponentProps, createElement } from 'react';

export type ButtonProps = ComponentProps<'button'>;

export default function Button(props: ButtonProps) {
  return createElement('button', { type: 'button', ...props });
}
