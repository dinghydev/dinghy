import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYPAD = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Keypad.svg;strokeColor=none;',
  },
  _width: 26.4,
  _height: 48,
}

export function Keypad(props: DiagramNodeProps) {
  return <Shape {...KEYPAD} {...props} _style={extendStyle(KEYPAD, props)} />
}
