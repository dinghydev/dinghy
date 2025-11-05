import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPHONE_KEYBOARD_LETTERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybLett;sketch=0;',
  },
  _width: 174,
  _height: 100,
}

export function IphoneKeyboardLetters(props: NodeProps) {
  return (
    <Shape
      {...IPHONE_KEYBOARD_LETTERS}
      {...props}
      _style={extendStyle(IPHONE_KEYBOARD_LETTERS, props)}
    />
  )
}
