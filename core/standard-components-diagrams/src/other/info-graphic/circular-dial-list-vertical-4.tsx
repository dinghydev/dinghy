import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_4 = {
  _style: {
    entity:
      'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#5D7F99;fontSize=12;fontColor=#23445D;align=left;fontStyle=1;',
  },
  _original_width: 3,
  _original_height: 540,
}

export function CircularDialListVertical4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_VERTICAL_4}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_VERTICAL_4, props)}
    />
  )
}
