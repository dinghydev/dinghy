import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_11 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#10739E;align=center;fontStyle=1;',
  },
  _width: 5,
  _height: 260,
}

export function CircularDialListHorizontal11(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_11}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_11, props)}
    />
  )
}
