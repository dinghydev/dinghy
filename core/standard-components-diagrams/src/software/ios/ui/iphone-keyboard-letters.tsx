import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IPHONE_KEYBOARD_LETTERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybLett;sketch=0;',
  },
  _original_width: 174,
  _original_height: 100,
}

export function IphoneKeyboardLetters(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPHONE_KEYBOARD_LETTERS}
      {...props}
      _style={extendStyle(IPHONE_KEYBOARD_LETTERS, props)}
    />
  )
}
