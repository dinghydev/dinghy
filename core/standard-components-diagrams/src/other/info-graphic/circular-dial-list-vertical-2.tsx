import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_2 = {
  _style: {
    entity:
      'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#F8C382;fontSize=12;fontColor=#F2931E;align=left;fontStyle=1;',
  },
  _width: 1,
  _height: 540,
}

export function CircularDialListVertical2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_VERTICAL_2}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_VERTICAL_2, props)}
    />
  )
}
