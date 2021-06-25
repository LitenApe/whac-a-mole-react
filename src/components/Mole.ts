import { createElement } from 'react';
import Button, { ButtonProps } from './Button';
import { ClickEvent } from './Game';

type MoleProps = {
  active: boolean;
  onClick: (event: ClickEvent) => void;
} & Omit<ButtonProps, 'onClick'>;

export default function Mole(props: MoleProps) {
  const { active, onClick, ...rest } = props;

  function whack() {
    onClick(active ? ClickEvent.WHACKED : ClickEvent.ESCAPED);
  }

  return createElement(Button, {
    ...rest,
    className: `mole ${active && 'active'}`,
    onClick: whack,
  });
}
