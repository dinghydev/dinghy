import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROTOCOL_4 = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#07838f;fillColor=#dafdf5;fontColor=#266f3a;strokeWidth=1.5;',
  _width: 125,
  _height: 16,
}

export function Protocol4(props: DiagramNodeProps) {
  return <Shape {...PROTOCOL_4} {...props} />
}
