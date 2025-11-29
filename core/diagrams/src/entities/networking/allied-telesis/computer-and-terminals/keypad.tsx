import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEYPAD = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Keypad.svg;strokeColor=none;',
  },
  _width: 26.4,
  _height: 48,
}

export function Keypad(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KEYPAD)} />
}
