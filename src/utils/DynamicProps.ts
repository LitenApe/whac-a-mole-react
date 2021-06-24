import { ComponentProps } from 'react';

export type HTMLTags = keyof JSX.IntrinsicElements;

export type DynamicProps<T extends HTMLTags> = {
  as?: T;
} & ComponentProps<T>;
