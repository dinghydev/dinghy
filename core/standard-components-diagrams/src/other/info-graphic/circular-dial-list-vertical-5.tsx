import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_5 = {
  _style: {
    entity:
      'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#61C6CE;fontSize=12;fontColor=#12AAB5;align=left;fontStyle=1;',
  },
  _original_width: 4,
  _original_height: 540,
}

export function CircularDialListVertical5(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_VERTICAL_5}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_VERTICAL_5, props)}
    />
  )
}
