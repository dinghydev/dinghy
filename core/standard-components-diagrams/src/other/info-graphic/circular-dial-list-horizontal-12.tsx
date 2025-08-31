import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_12 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#F2931E;align=center;fontStyle=1;',
  },
  _width: 6,
  _height: 260,
}

export function CircularDialListHorizontal12(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_12}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_12, props)}
    />
  )
}
