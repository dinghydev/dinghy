import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IPHONE_KEYBOARD_SYMBOLS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybSymb;sketch=0;',
  },
  _width: 174,
  _height: 100,
}

export function IphoneKeyboardSymbols(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPHONE_KEYBOARD_SYMBOLS}
      {...props}
      _style={extendStyle(IPHONE_KEYBOARD_SYMBOLS, props)}
    />
  )
}
