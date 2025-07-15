import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPHONE_KEYBOARD_LETTERS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybLett;sketch=0;',
  _width: 174,
  _height: 100,
}

export function IphoneKeyboardLetters(props: DiagramNodeProps) {
  return <Shape {...IPHONE_KEYBOARD_LETTERS} {...props} />
}
