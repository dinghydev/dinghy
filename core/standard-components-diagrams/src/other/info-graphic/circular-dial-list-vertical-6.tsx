import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_6 = {
  _style:
    'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=left;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;spacing=8;',
  _width: 5,
  _height: 540,
}

export function CircularDialListVertical6(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_VERTICAL_6} {...props} />
}
