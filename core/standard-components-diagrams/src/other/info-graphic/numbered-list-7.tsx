import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NUMBERED_LIST_7 = {
  _style: {
    entity:
      'shape=ellipse;perimeter=ellipsePerimeter;fontSize=22;fontStyle=1;shadow=0;strokeColor=#ffffff;fillColor=#23445D;strokeWidth=4;fontColor=#ffffff;align=center;whiteSpace=wrap;html=1;',
  },
  _original_width: 7,
  _original_height: 320,
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
