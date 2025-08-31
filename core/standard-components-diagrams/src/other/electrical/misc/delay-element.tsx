import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELAY_ELEMENT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.delay_element',
  _width: 60,
  _height: 60,
}

export function DelayElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELAY_ELEMENT}
      {...props}
      _style={extendStyle(DELAY_ELEMENT, props)}
    />
  )
}
