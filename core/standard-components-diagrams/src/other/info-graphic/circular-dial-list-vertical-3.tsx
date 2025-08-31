import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_3 = {
  _style:
    'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#F08E81;fontSize=12;fontColor=#AE4132;align=left;fontStyle=1;',
  _width: 2,
  _height: 540,
}

export function CircularDialListVertical3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_VERTICAL_3}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_VERTICAL_3, props)}
    />
  )
}
