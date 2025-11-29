import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEYBOARD_LETTERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybLett;sketch=0;',
  },
  _width: 174,
  _height: 100,
}

export function KeyboardLetters(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KEYBOARD_LETTERS)} />
}
