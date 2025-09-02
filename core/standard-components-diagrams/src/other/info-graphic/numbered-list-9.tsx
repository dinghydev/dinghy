import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBERED_LIST_9 = {
  _style: {
    entity:
      'shape=ellipse;perimeter=ellipsePerimeter;fontSize=22;fontStyle=1;shadow=0;strokeColor=#ffffff;fillColor=#12AAB5;strokeWidth=4;fontColor=#ffffff;align=center;whiteSpace=wrap;html=1;',
  },
  _original_width: 9,
  _original_height: 320,
}

export function NumberedList9(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_LIST_9}
      {...props}
      _style={extendStyle(NUMBERED_LIST_9, props)}
    />
  )
}
