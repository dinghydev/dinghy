import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POS_KEYPAD = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/POS_keypad.svg;strokeColor=none;',
  },
  _width: 37.2,
  _height: 27.6,
}

export function PosKeypad(props: DiagramNodeProps) {
  return (
    <Shape {...POS_KEYPAD} {...props} _style={extendStyle(POS_KEYPAD, props)} />
  )
}
