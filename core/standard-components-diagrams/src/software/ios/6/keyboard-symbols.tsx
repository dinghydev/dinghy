import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEYBOARD_SYMBOLS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybSymb;sketch=0;',
  },
  _width: 174,
  _height: 100,
}

export function KeyboardSymbols(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEYBOARD_SYMBOLS}
      {...props}
      _style={extendStyle(KEYBOARD_SYMBOLS, props)}
    />
  )
}
