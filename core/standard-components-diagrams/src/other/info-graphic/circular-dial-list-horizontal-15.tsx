import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_15 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#12AAB5;align=center;fontStyle=1;',
  _width: 9,
  _height: 260,
}

export function CircularDialListHorizontal15(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_HORIZONTAL_15} {...props} />
}
