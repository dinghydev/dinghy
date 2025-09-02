import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYBOARD_LETTERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybLett;sketch=0;',
  },
  _original_width: 174,
  _original_height: 100,
}

export function KeyboardLetters(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEYBOARD_LETTERS}
      {...props}
      _style={extendStyle(KEYBOARD_LETTERS, props)}
    />
  )
}
