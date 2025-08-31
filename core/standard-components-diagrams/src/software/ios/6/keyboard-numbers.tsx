import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYBOARD_NUMBERS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iKeybNumb;sketch=0;',
  _width: 174,
  _height: 100,
}

export function KeyboardNumbers(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEYBOARD_NUMBERS}
      {...props}
      _style={extendStyle(KEYBOARD_NUMBERS, props)}
    />
  )
}
