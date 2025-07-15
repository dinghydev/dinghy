import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POS_KEYPAD = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/POS_keypad.svg;',
  _width: 37.2,
  _height: 27.6,
}

export function PosKeypad(props: DiagramNodeProps) {
  return <Shape {...POS_KEYPAD} {...props} />
}
