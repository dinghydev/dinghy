import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_5 = {
  _style:
    'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#61C6CE;fontSize=12;fontColor=#12AAB5;align=left;fontStyle=1;',
  _width: 4,
  _height: 540,
}

export function CircularDialListVertical5(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_VERTICAL_5} {...props} />
}
