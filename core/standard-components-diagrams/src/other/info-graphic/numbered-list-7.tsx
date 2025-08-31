import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBERED_LIST_7 = {
  _style:
    'shape=ellipse;perimeter=ellipsePerimeter;fontSize=22;fontStyle=1;shadow=0;strokeColor=#ffffff;fillColor=#23445D;strokeWidth=4;fontColor=#ffffff;align=center;whiteSpace=wrap;html=1;',
  _width: 7,
  _height: 320,
}

export function NumberedList7(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_LIST_7}
      {...props}
      _style={extendStyle(NUMBERED_LIST_7, props)}
    />
  )
}
