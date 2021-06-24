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

  return Button({
    ...rest,
    style: {
      width: 48,
      height: 48,
      borderStyle: 'solid',
      borderRadius: '100%',
      borderColor: active ? 'green' : 'grey',
      backgroundColor: active ? 'green' : 'grey',
    },
    onClick: whack,
  });
}
