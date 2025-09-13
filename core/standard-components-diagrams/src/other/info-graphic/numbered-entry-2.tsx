import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NUMBERED_ENTRY_2 = {
  _style: {
    entity:
      'shape=ellipse;perimeter=ellipsePerimeter;fontSize=22;fontStyle=1;shadow=0;strokeColor=#ffffff;fillColor=#10739E;strokeWidth=4;fontColor=#ffffff;align=center;whiteSpace=wrap;html=1;',
  },
  _width: 1,
  _height: 60,
}

export function NumberedEntry2(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_ENTRY_2}
      {...props}
      _style={extendStyle(NUMBERED_ENTRY_2, props)}
    />
  )
}
