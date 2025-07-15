import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYBOARD_SYMBOLS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybSymb;sketch=0;',
  _width: 174,
  _height: 100,
}

export function KeyboardSymbols(props: DiagramNodeProps) {
  return <Shape {...KEYBOARD_SYMBOLS} {...props} />
}
